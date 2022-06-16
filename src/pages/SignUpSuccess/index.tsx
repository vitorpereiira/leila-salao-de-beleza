import React from 'react';
import { Button, ButtonText, Container, Content, Logo, Title } from './styles';
import correct from '../../assets/correct.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export const SignUpSuccess: React.FC = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

  return (
    <Container>
      <Content>
        <Logo source={correct} />
        <Title>Cadastro Concluído</Title>
        <Button onPress={() => navigate('SignIn')}>
          <ButtonText>OK</ButtonText>
        </Button>
      </Content>
    </Container>
  );
};
