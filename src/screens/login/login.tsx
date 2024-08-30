import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'

import PngGoogle from '@assets/google-icon.png'
import ButtonPersonalizado from '@components/ButtonPersonalizado/ButtonPersonalizado'
import ButtonSocialFacebook from '@components/ButtonSocialFacebook/ButtonSocial'
import ButtonSocialGoogle from '@components/ButtonSocialGoogle/ButtonSocial'

import Input from '@components/input'
import {
  Container,
  ContentBody,
  ContentFooter,
  ContentHeader,
  Description,
  Title,
  ViewButton,
} from './styles'

// todo: arrumar função do onPress erro no loading
const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  function onPressButton() {
    setLoading(true)
    console.log('pressionado')
    setTimeout(() => {
      setLoading(false)
    }, 2000)
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
          <ButtonPersonalizado title="entrar" onPress={onPressButton} variant="primary"  />
        </ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  )
}

export default Login
