import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '@styles/theme';

export const Button = styled(RectButton)`
align-items: center;
flex-direction: row;
margin-bottom: 16px;
justify-content: center;
width: ${RFValue(145)}px;
height: ${RFValue(50)}px;
margin-left: ${RFValue(15)}px;
border-radius: ${RFValue(5)}px;
box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
background-color: ${theme.COLORS.GRAY5};
`;
export const IconGoogle = styled.Image`
width: ${RFValue(55)}px;
height: ${RFValue(55)}px;
`
export const Title = styled.Text`
font-size: ${RFValue(15)}px;
margin-left: ${RFValue(0)}px;;
font-family: ${theme.FONTS.POPPINSLIGHT};
`