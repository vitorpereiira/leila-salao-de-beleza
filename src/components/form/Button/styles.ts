import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-top: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
`;
