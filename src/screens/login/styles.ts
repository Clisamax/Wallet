import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '@styles/theme';

export const Container = styled.View`
  padding: ${RFValue(20)}px;
`;
export const ContentHeader = styled.View`
  width: 100%;
  margin-left: -10px;
  justify-content: space-between;
  align-items: center;
`;
export const ViewButton = styled.View`
  flex-direction: row;
`;
export const ContentBody = styled.View``;
export const ContentFooter = styled.View``;
export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(25)}px;
`;
export const Description = styled.Text`
  margin-top: ${RFValue(25)}px;
  font-size: ${RFValue(15)}px;
  margin-bottom: ${RFValue(15)}px;
  font-family: ${theme.FONTS.POPPINSLIGHT};
`;
