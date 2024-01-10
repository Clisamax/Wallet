import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'
import theme from '@styles/theme'

export const Container = styled.View`
width: 100%;
height: 50px;
padding: 0 12px;
margin-top: ${RFValue(10)}px;
border-radius: 12px;
justify-content: center;
align-items: center;
flex-direction: row;
background-color: ${theme.COLORS.ATTENTION};
`

export const InputContainer = styled.TextInput`
  flex: 1;
  align-content: space-between;
  height: 45px;
  border: 0;
  border-radius: 8px;
  font-size: ${RFValue(14)}px;
  font-family: ${theme.FONTS.POPPINSLIGHT};
`