import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '@styles/theme';

export const Container = styled.View`
	padding: ${RFValue(10)}px;
`;

export const	ContentHeader = styled.View`
align-items: center;
justify-content: center;
padding: ${RFValue(20)}px;
`
export const    ContentBody = styled.View`

`
export const    ContentFooter = styled.View`

`
export const Title = styled.Text`
	text-align: center;
	margin-top: ${RFValue(40)}px;
	font-size: ${RFValue(25)}px;
	font-family: ${theme.FONTS.POPPINSMEDIUM};
`;
export const Description = styled.Text`
	margin-top: ${RFValue(60)}px;
	font-size: ${RFValue(15)}px;
	font-family: ${theme.FONTS.POPPINSLIGHT};
`;
export const ViewButton = styled.View`


`