
// Button.tsx

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { buttonStyles } from './ButtonStyles';
import { buttonVariants } from './ButtonVariants';

interface ButtonProps {
  onPress: () => void;
  variant: keyof typeof buttonVariants;
  children: React.ReactNode;
}

const ButtonContainer = styled(TouchableOpacity)<{ variant: keyof typeof buttonVariants }>`
  ${buttonStyles.button};
  background-color: ${({ variant }: { variant: keyof typeof buttonVariants }) => buttonVariants[variant].backgroundColor};
`;

const ButtonText = styled(Text)<{ variant: keyof typeof buttonVariants }>`
  ${buttonStyles.buttonText};
  color: ${({ variant }: { variant: keyof typeof buttonVariants }) => buttonVariants[variant].color};
`;

const Button: React.FC<ButtonProps> = ({ onPress, variant, children }) => {
  return (
    <ButtonContainer onPress={onPress} variant={variant}>
      <ButtonText variant={variant}>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
