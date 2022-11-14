import {
  View, Text,
} from 'react-native';
import { Button, TextInput } from "@react-native-material/core";
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Trans, useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const LoginSchema = yup.object({
  tckn: yup.string()
    .required('general_required_field_errorMessage')
    .length(11, 'login_identityNo_length_errorMessage'),
  password: yup.string()
    .required('general_required_field_errorMessage')
    .length(6, 'login_password_length_errorMessage'),
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
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')
  }
  const { handleSubmit, formState: { errors }, control, getValues } = useForm<FormProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });


  const handleLogin = async (values: FormProps) => {
    console.log(values);
    // Add API call

    // Navigate if successful
    navigation.navigate('Dashboard' as never);
  }

  return (
    <View
      style={{ padding: 15 }}>
      <Controller
        control={control}
        name="tckn"
        render={({ field: { onChange, value } }) => (
          <TextInput label={t('login_identityNo_input_label') || ''} keyboardType="numeric" value={value} onChangeText={onChange} maxLength={11} />
        )}

      />
      {errors.tckn ?
        <Text style={{ color: 'red' }}>
          <Trans i18nKey={t(errors.tckn.message as string)} />
        </Text> : null}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput label={t('login_password_input_label') || ''} keyboardType="numeric" value={value} onChangeText={onChange} maxLength={6} secureTextEntry />
        )}

      />
      {errors.password ? <Text style={{ color: 'red' }}>
        <Trans i18nKey={t(errors.password.message as string)} />
      </Text> : null}
      <Button title={t('general_continue_button')} onPress={handleSubmit(handleLogin)} />
      <Button title={t('language_change_button')} variant="outlined" onPress={changeLanguage} />
    </View>
  );
}

export default Form