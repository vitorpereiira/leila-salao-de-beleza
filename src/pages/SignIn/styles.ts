import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${RFValue(120)}px;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 24px;
`;

export const Logo = styled(Image)`
  width: ${RFValue(220)}px;
  height: ${RFValue(220)}px;
  margin-bottom: ${RFValue(40)}px;
`;

export const ForgotPasswordButton = styled(TouchableOpacity)`
  margin-top: 24px;
`;

export const ForgotPasswordTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CreateAccount = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 0;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.black};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(20)}px;
`;

export const CreateAccountTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 10px;
`;
