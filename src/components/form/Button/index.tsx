import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface ButttonProps extends TouchableOpacityProps {
  title: string;
}

export const Button: React.FC<ButttonProps> = ({ title, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <Title>{title}</Title>
    </Container>
  );
};
