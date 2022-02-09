import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/main';
import MainScreen from '../screens/me';
import LoginScreen from '../screens/auth/login';
import SignUpScreen from '../screens/auth/signup';
import RecoverPswdScreen from '../screens/auth/recover-pass';

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  RecoverPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="RecoverPassword" component={RecoverPswdScreen} />
    </Stack.Navigator>
  );
}
