import React from 'react';
import { SafeAreaView } from 'react-native';
import ButtonSocialGoogle from '@components/ButtonSocialGoogle/ButtonSocial';
import ButtonSocialFacebook from '@components/ButtonSocialFacebook/ButtonSocial';
import PngGoogle from '@assets/google-icon.png';
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

const Login: React.FC = () => {
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
            iconName="mail-open-outline"
            iconSize={25}
            placeholder="digite seu email"
          />
          <Input
            RightIcon
            iconName="lock-closed-outline"
            iconSize={25}
            placeholder="digite sua senha"
          />
        </ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export default Login;
