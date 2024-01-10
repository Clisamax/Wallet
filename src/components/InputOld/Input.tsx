import React, { forwardRef, useCallback, useState, useRef, useImperativeHandle, useEffect } from 'react'
import { Text, TextInputProps } from 'react-native'
import { useField } from '@unform/core'
import { Ionicons } from '@expo/vector-icons'

interface InputRef{
    focus = void;
}

interface InputValueReference{
    value: string;
}

interface InputProps extends TextInputProps{
    name: string;
    value?: string;
    iconName?: React.ComponentProps<typeof Ionicons>['name']
    containerStyle?: {[key:string]: string | number}
}

import { Container } from './styles'

const InputOld: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    {
        name,
        value,
        iconName,
        containerStyle,
        ...rest
    }
) => {
    return <Container>
      <Text>Input</Text>
  </Container>
}

export default InputOld
