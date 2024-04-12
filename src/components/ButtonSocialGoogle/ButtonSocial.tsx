import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Button, IconGoogle, Title } from './styles';
import { Image } from 'react-native';

interface Props extends RectButtonProps {
  title: string;
  imagem: Image;
}

const ButtonSocialGoogle: React.FC<Props> = ({ title, imagem, ...rest }) => {
  return (
    <Button {...rest}>
      <IconGoogle source={imagem} resizeMode="contain" />
      <Title>{title}</Title>
    </Button>
  );
};

export default ButtonSocialGoogle;
