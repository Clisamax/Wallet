import React from 'react';
import { Text } from 'react-native';

import { Container, Title } from './styles';

interface IButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<IButtonProps> = ({ title, onPress = () => {} }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};
export default Button;
