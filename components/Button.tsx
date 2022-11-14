import React, { FC } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { StyledView, StyledText } from './Button.styles';

interface Props extends TouchableOpacityProps {
  variant: 'primary' | 'secondary';
  title: string;
  uppercase?: boolean;
}

const Button: FC<Props> = ({ variant, title, uppercase = true, ...props }: any) => {
  const buttonVariant = props.disabled ? "disabled" : variant;
  return (
    <TouchableOpacity {...props}>
      <StyledView variant={buttonVariant}>
        <StyledText variant={buttonVariant}>
          {uppercase ? title.toUpperCase() : title}
        </StyledText>
      </StyledView>
    </TouchableOpacity>
  );
};

export default Button;
