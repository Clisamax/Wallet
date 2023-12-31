import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { Container, InputContainer } from './styles'
import { useTheme } from 'styled-components'

interface InputProps {
  rightIcon?: boolean
  leftIcon?: boolean
  iconName: string
  iconColor: string
  iconSize: number
}

const Input: React.FC<InputProps> = ({ rightIcon, leftIcon }) => {
  const { COLORS } = useTheme()
  return (
    <Container>
         
      <InputContainer />
    </Container>
  )
}

export { Input }
