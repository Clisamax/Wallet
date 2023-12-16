import React from 'react'
import { SafeAreaView } from 'react-native'

import { Container, ContentHeader, ContentBody, ContentFooter, Title, Description, ViewButton } from './style'

import ButtonSocialGoogle from '@components/ButtonSocialGoogle/ButtonSocialGoogle'
import ButtonSocialFacebook from '@components/ButtonSocial/ButtonSocialFacebook'

const screens: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja Bem Vindo(a) Wallet App</Title>
          <Description>sign up with</Description>
          <ViewButton>
            <ButtonSocialGoogle title={'Google'} />
            <ButtonSocialFacebook title={'Facebook'} iconName={'facebook'} />
          </ViewButton>
        </ContentHeader>
        <ContentBody></ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  )
}

export default screens