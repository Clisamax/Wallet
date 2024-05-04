import styled from 'styled-components/native';
import theme from '@styles/theme';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 12px;
    margin-top: 10px;
    border-radius: 8px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: ${theme.COLORS.GRAY5};
`;

export const InputContainer = styled.TextInput`
    border: 0;
    flex: 1;
    height: 50px;
    font-size: 16px;
    border-radius: 8px;
    font-family: ${theme.FONTS.POPPINSLIGHT};
`;