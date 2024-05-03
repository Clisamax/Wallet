import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import ButtonSocialGoogle from '@components/ButtonSocialGoogle/ButtonSocial';
import ButtonSocialFacebook from '@components/ButtonSocialFacebook/ButtonSocial';
import PngGoogle from '@assets/google-icon.png';
import { ButtonPersonalizado } from '@components/ButtonPersonalizado';

import Input from '@components/input';
import {
  ContentHeader,
  ContentBody,
  ContentFooter,
  Container,
  Title,
  Description,
  ViewButton,
} from './styles';
import Button from '@components/Button/Button';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  function onPressButton() {
    setLoading(true);
    console.log('pressionado');
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja bem vindo(a) {'\n'} a Wallet App</Title>
          <Description>Sing Up with</Description>
          <ViewButton>
            <ButtonSocialGoogle title="Google" imagem={PngGoogle} />
            <ButtonSocialFacebook iconName="facebook" title="Facebook" />
          </ViewButton>
        </ContentHeader>
        <ContentBody>
          <Input
            LeftIcon
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={false}
            keyboardType="email-address"
            iconName="mail-open-outline"
            iconSize={25}
            placeholder="digite seu email"
          />
          <Input
            LeftIcon
            RightIcon
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            iconName="lock-closed-outline"
            iconSize={25}
            placeholder="digite sua senha"
          />
          <ButtonPersonalizado
            title="entrar"
            onPress={onPressButton}
            variant="primary"
            style={{ marginBottom: 20 }}
          />
        </ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export default Login;
