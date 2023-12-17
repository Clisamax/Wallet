import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { Container, InputContainer } from './styles'
import { useTheme } from 'styled-components'

interface InputProps {
  rightIcon?: boolean
  leftIcon?: boolean
}

const Input: React.FC<InputProps> = ({ rightIcon, leftIcon }) => {
  const { COLORS } = useTheme()
  return (
    <Container>
      {leftIcon && <Ionicons name="mail-outline" size={20} color={COLORS.BACKGROUNDLIGHT} style={{ padding: 5, marginLeft: 15 }} />}
      {rightIcon && <Ionicons name="eye-outline" size={20} color={COLORS.BACKGROUNDLIGHT} style={{ padding: 5, marginRight: 15 }} />}
      <InputContainer />
    </Container>
  )
}

export { Input }
