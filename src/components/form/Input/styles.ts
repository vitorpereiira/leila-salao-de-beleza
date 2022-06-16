import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const InputText = styled(TextInput)`
  width: 100%;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray500};
  margin-right: 8px;
`;
