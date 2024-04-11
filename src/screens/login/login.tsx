import React from 'react';
import { SafeAreaView } from 'react-native';
import ButtonSocial from '@components/ButtonSocial/ButtonSocial';

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
          <ViewButton><ButtonSocial/></ViewButton>
        </ContentHeader>
        <ContentBody></ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export default Login;
