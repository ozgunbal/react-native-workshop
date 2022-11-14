import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native';

/* 
- Add Props interface to support type safety
 */

const Button = ({ variant, title, uppercase = true, ...props }: any) => {
  const buttonVariant = props.disabled ? "disabled" : variant;
  return (
    <TouchableOpacity {...props}>
      <View style={viewStyles[buttonVariant as keyof typeof viewStyles]}>
        <Text style={textStyles[`${buttonVariant}Text` as keyof typeof textStyles]}>
          {uppercase ? title.toUpperCase() : title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;


const viewStyles = StyleSheet.create({
  primary: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: 'center',
    height: 50,
  },
  secondary: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: 'center',
    height: 50,
  },
  disabled: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: 'center',
    height: 50,
  },
});

const textStyles = StyleSheet.create({
  primaryText: {
    color: "white",
    fontSize: 24,
    fontWeight: "800"
  },
  secondaryText: {
    color: "red",
    fontSize: 24,
    ontWeight: "800"
  },
  disabledText: {
    color: "black",
    fontSize: 24,
    ontWeight: "800"
  }
});