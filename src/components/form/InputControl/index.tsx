import React from 'react';
import { Container, Error } from './styles';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  icon: string;
  error: string | undefined;
}

export const InputControl: React.FC<Props> = ({
  control,
  name,
  icon,
  error,
  ...otherProps
}) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            icon={icon}
            onChangeText={onChange}
            value={value}
            {...otherProps}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
