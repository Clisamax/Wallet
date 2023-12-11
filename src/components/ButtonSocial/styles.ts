import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../styles/theme'

export const Button = styled(RectButton)`
  width: ${RFValue(130)}px;
  height: ${RFValue(60)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(5)}px;
  margin-right: ${RFValue(10)}px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);

  background-color: ${theme.COLORS.GRAY5};
`
export const IconGoogle = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
`
export const Title = styled.Text`
margin-left: ${RFValue(10)}px;
font-size: ${RFValue(15)}px;
font-family: ${theme.FONTS.POPPINSLIGHT};
`