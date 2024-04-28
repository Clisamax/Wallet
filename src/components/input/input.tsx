import React from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { Container, InputContainer } from './styles';
import theme from '@styles/theme';
import { TextInputProps } from 'react-native';

interface inputProps {
  RightIcon?: boolean;
  LeftIcon?: boolean;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
}

const Input: React.FC<inputProps & TextInputProps> = ({
  RightIcon,
  LeftIcon,
  iconName,
  iconSize,
  iconColor,
  ...rest
}) => {
  return (
    <Container {...rest} >
      {LeftIcon && (
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor || theme.COLORS.TEXTDARK}
          style={{ padding: 5 }}
        />
      )}
      <InputContainer {...rest} placeholderTextColor={theme.COLORS.GRAY3}/>
      {RightIcon && (
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor || theme.COLORS.TEXTDARK}
          style={{ padding: 5, marginRight: 10 }}
        />
      )}
    </Container>
  );
};
export default Input;

