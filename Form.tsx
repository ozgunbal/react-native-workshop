import {
  View, Text,
} from 'react-native';
import { Button, TextInput } from "@react-native-material/core";
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const LoginSchema = yup.object({
  tckn: yup.string().required('Zorunlu alan').length(11, '11 karakter girmelisiniz'),
  password: yup.string().required('Zorunlu alan').length(6, '6 karakter girmelisiniz'),
}).required();

const defaultValues = {
  tckn: '',
  password: '',
}

interface FormProps {
  tckn: string;
  password: string;
}

const Form = () => {
  const { handleSubmit, formState: { errors }, control, getValues } = useForm<FormProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });


  const handleLogin = async (values: FormProps) => {
    console.log(values);
    // Add API call
  }

  return (
    <View
      style={{ padding: 15 }}>
      <Controller
        control={control}
        name="tckn"
        render={({ field: { onChange, value } }) => (
          <TextInput label="TCKN" keyboardType="numeric" value={value} onChangeText={onChange} maxLength={11} />
        )}

      />
      {errors.tckn ? <Text style={{ color: 'red' }}>{errors.tckn.message as string}</Text> : null}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput label="Password" keyboardType="numeric" value={value} onChangeText={onChange} maxLength={6} secureTextEntry />
        )}

      />
      {errors.password ? <Text style={{ color: 'red' }}>{errors.password.message as string}</Text> : null}
      <Button title="Submit" onPress={handleSubmit(handleLogin)} />
    </View>
  );
}

export default Form