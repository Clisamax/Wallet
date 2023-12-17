import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { Button, Title, IconFacebook } from './styles'

interface Props extends RectButtonProps {
  title: string
  iconName: React.ComponentProps<typeof Fontisto>['name']
}

const ButtonSocialFacebook: React.FC<Props> = ({ title, iconName, ...rest }) => {
  return (
    <Button>
      <IconFacebook name={iconName} />
      <Title>{title}</Title>
    </Button>
  )
}

export { ButtonSocialFacebook }
