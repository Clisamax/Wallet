import styled from 'styled-components/native'
//import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../../Style/theme'

export const Button = styled.View`
  width: ${RFValue(130)}px;
  height: ${RFValue(60)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(5)}px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);

  background-color: ${theme.COLORS.GRAY4};
`
