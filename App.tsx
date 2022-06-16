import React from 'react';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from '@expo-google-fonts/roboto-slab';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default App;
