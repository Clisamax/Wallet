import { AntDesign } from '@expo/vector-icons'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import { Container, Content, Title } from './styles'
import { buttonVariants } from './variantes'

interface ButtonProps {
  title: string
  // uma função para o botão
  onPress: () => void
  // se o botão está carregando
  isLoading?: boolean
  // nome do ícone do ant design, keyof typeof AntDesign.glyphMap para mapear os atributos
  iconName?: keyof typeof AntDesign.glyphMap
  // se o botão está desabilitado
  disabled?: boolean
  // variant do botão, "primary" ou "outline"
  variant?: 'primary' | 'outline' | 'black' | "transparent"
  // estilos adicionais para o botão, TouchableOpacityProps["style"] para estilizar o componente TouchableOpacity
  styles?: TouchableOpacityProps['style']
}

const ButtonPersonalizado: React.FC<ButtonProps> = ({
  title,
  onPress,
  isLoading = false,
  iconName,
  disabled,
  variant = 'primary',
  styles,
}) => {
  // define as cores, estilos e ícones dos botões de acordo com a variant
  const ButtonVariant = buttonVariants[variant]
  // define o estilo do botão baseado na variant e se está desabilitado ou carregando

  const ButtonStyle = disabled ? ButtonVariant.disabled : ButtonVariant.enabled
  return (
    // exibe o botão com o conteúdo especificado pelo props do componente
    <Container
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[ { ...ButtonStyle.button }, styles]}
    >
      {isLoading ? (
        // exibe o ícone ou o texto do botão dependendo do isLoading ou disabled
        <ActivityIndicator color={ButtonStyle.icon.color} />
      ) : (
        <Content>
          {iconName && (
            // exibe o ícone se for fornecido
            <AntDesign
              style={{ marginRight: 12 }}
              size={26}
              color={ButtonStyle.icon.color}
              name={iconName}
            />
          )}
          <Text style={[Title, { color: ButtonStyle.title.color }]}>{title}</Text>
        </Content>
      )}
    </Container>
  )
}
export default ButtonPersonalizado
