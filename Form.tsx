import { View } from 'react-native';
import { Button, TextInput } from "@react-native-material/core";
  
/*
 Add react hook form and yup for form management and validations
*/
const Form = () => {
  return ( 
    <View style={{ padding: 15 }}>
      <TextInput label="TCKN" keyboardType="numeric" maxLength={11} />
      <TextInput label="Password" keyboardType="numeric" maxLength={6} secureTextEntry/>
      <Button title="Submit" />
    </View>
  );
}

export default Form