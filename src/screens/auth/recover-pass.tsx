import * as React from 'react';
import { Center, VStack, Button, Box, Text, Link, FormControl, Input } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/MainStackNavigator';

type RecoverPasswordScreenProp = NativeStackNavigationProp<RootStackParamList, 'RecoverPassword'>;

export default function RecoverPswdScreen() {
  const navigation = useNavigation<RecoverPasswordScreenProp>();

  return (
    <Center bg="#1D232A" px={3} flex={1}>
      <Box safeArea py="8" w="100%" maxW="290">
        <VStack mt="2" space={1}>
          <Link
            href="#l"
            onPress={() => navigation.navigate('Login')}
            isUnderlined={false}
            _text={{
              fontFamily: 'inter',
              fontSize: 'sm',
              color: 'blue.500',
            }}
          >
            Back to Login
          </Link>
          <Text fontFamily="inter" fontWeight={800} fontSize="3xl" color="gray.100">
            Forgot Password
          </Text>
          <Text fontFamily="inter" fontSize="sm" color="gray.400">
            Send an email to reset your password
          </Text>
          <FormControl mt={4}>
            <FormControl.Label
              _text={{
                fontFamily: 'inter',
                fontSize: 'sm',
                color: 'gray.100',
              }}
            >
              Email
            </FormControl.Label>
            <Input
              py={3}
              variant="unstyled"
              fontFamily="inter"
              fontSize="sm"
              bg="#272D36"
              placeholder="Yves@gmail.com"
              px={5}
              borderRadius={10}
              color="gray.100"
            />
          </FormControl>
          <Button
            _text={{ fontFamily: 'inter', color: 'coolGray.100' }}
            py={3}
            size="lg"
            mt="4"
            _light={{ bg: '#2563eb', borderRadius: 10 }}
            onPress={() => navigation.navigate('Login')}
          >
            Log in
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
