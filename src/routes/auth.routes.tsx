import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { SignUpSuccess } from '../pages/SignUpSuccess';

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="SignUpSuccess" component={SignUpSuccess} />
    </Auth.Navigator>
  );
};
