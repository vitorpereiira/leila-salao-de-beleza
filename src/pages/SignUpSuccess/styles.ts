import styled from 'styled-components/native';
import { TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Logo = styled(Image)`
  width: ${RFValue(54)}px;
  height: ${RFValue(36)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(36)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: ${RFValue(50)}px;
  text-align: center;
`;

export const Button = styled(TouchableOpacity)`
  padding: 18px 36px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-top: ${RFValue(50)}px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
`;
