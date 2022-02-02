import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/main';
import MeScreen from '../screens/me';
import LoginScreen from '../screens/auth/login';
import SignUpScreen from '../screens/auth/signup';
import RecoverPswdScreen from '../screens/auth/recover-pass';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="Me" component={MeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="RecoverPassword" component={RecoverPswdScreen} />
    </Stack.Navigator>
  );
}
