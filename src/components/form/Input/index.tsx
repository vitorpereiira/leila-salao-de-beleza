import React from 'react';
import { Container, InputText, Icon } from './styles';
import theme from '../../../global/styles/theme';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  icon: string;
}

export const Input: React.FC<InputProps> = ({ icon, ...otherProps }) => {
  return (
    <Container>
      <Icon name={icon} />
      <InputText placeholderTextColor={theme.colors.gray500} {...otherProps} />
    </Container>
  );
};
