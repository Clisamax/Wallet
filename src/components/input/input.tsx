import React, { useState } from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { Container, InputContainer } from './styles';
import theme from '@styles/theme';
import { TextInputProps, TouchableOpacity } from 'react-native';

interface inputProps {
  iconSize?: number;
  iconColor?: string;
  LeftIcon?: boolean;
  RightIcon?: boolean;
  iconName: keyof typeof Icon.glyphMap;
  secureTextEntry?: boolean;
}

const Input: React.FC<inputProps & TextInputProps> = ({
  RightIcon,
  LeftIcon,
  iconName,
  iconSize,
  iconColor,
  secureTextEntry,
  ...rest
}) => {
  const [secury, setSecury] = useState(secureTextEntry);
  return (
    <Container {...rest}>
      {LeftIcon && (
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor || theme.COLORS.GRAY2}
          style={{ padding: 5 }}
        />
      )}
      <InputContainer
        {...rest}
        secureTextEntry={secury}
        underLineColorAndroid="transparent"
        placeholderTextColor={theme.COLORS.GRAY3}
      />
      {RightIcon && (
        <TouchableOpacity onPress={() => setSecury(!secury)}>
          <Icon
            name={secury ? 'eye' : 'eye-off'}
            size={iconSize}
            color={iconColor || theme.COLORS.GRAY2}
            style={{ padding: 5, marginRight: 10 }}
          />
        </TouchableOpacity>
      )}
    </Container>
  );
};
export default Input;
