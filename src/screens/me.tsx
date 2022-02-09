import React from 'react';
import { Center, Box, Button } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/MainStackNavigator';

type mainScreenProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export default function MainScreen() {
  const navigation = useNavigation<mainScreenProp>();

  return (
    <Center bg="#2F3136" px={3} flex={1}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Button mt="4" colorScheme="blue" onPress={() => navigation.goBack()}>
          Back to Login
        </Button>
      </Box>
    </Center>
  );
}
