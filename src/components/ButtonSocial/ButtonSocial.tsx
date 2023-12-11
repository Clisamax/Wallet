import React from 'react'
import PngGoogle from '@assets/google.png'

import { Button, IconGoogle } from './styles'

const ButtonSocial: React.FC = () => {
  return (
    <Button>
      <IconGoogle source={PngGoogle} resizeMode='contain' />
    </Button>
  )
}

export default ButtonSocial
