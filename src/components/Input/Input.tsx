import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, InputContainer } from './styles'
import { useTheme } from 'styled-components'

interface InputProps {
  rightIcon?: boolean
  leftIcon?: boolean
  //   iconName: string
  //   iconColor: string
  //   iconSize: number
}

const Input: React.FC<InputProps> = ({ rightIcon, leftIcon }) => {
  const { COLORS } = useTheme()
  return (
    <Container>
      {leftIcon && <MaterialIcons name="mail-outline" size={20} color={COLORS.BLACK} style={{ padding: 5, marginLeft: 10 }} />}
      {rightIcon && <MaterialIcons name="remove-red-eye" size={20} color={COLORS.BLACK} style={{ padding: 5, marginRight: 10 }} />}
      <InputContainer />
    </Container>
  )
}

export { Input }
