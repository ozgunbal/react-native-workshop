import {
  TouchableOpacityProps,
  Text,
  View
} from 'react-native';
import styled from "styled-components/native";

interface StyledProps {
  variant: 'primary' | 'secondary' | 'disabled';
}

export const StyledTextBase = styled(Text)`
  font-size: 24px;
  font-weight: 800;
`;

export const StyledText = styled(StyledTextBase)`
  color: ${({ variant }: StyledProps) => {
    if (variant === 'primary') return "white";
    if (variant === 'secondary') return "red";
    if (variant === 'disabled') return "black";
  }};
`;

export const StyledViewBase = styled(View)`
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const StyledView = styled(StyledViewBase) <StyledProps>`
  background-color: ${({ variant }: StyledProps) => {
    if (variant === 'primary') return "red";
    if (variant === 'secondary') return "white";
    if (variant === 'disabled') return "grey";
  }};
  ${({ variant }: StyledProps) => variant === 'secondary' ? "border-color: red;" : ''}
  ${({ variant }: StyledProps) => variant === 'secondary' ? "border-width: 1px;" : ''}
`;