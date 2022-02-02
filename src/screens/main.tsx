import * as React from 'react';
import { Center, VStack, Button, Box, Text } from 'native-base';

export default function MainScreen({ navigation }: { navigation: any }) {
  return (
    <Center bg="#1D232A" px={3} flex={1}>
      <Box safeArea py="8" w="100%" maxW="290">
        <VStack mt="2" space={2} position="absolute" top={0}>
          <Text
            fontFamily="inter"
            fontSize="3xl"
            fontWeight={900}
            textAlign="center"
            color="coolGray.100"
          >
            Welcome to Glasnik
          </Text>
          <Text fontFamily="inter" fontSize="sm" textAlign="center" color="gray.400" mb={2}>
            Make Communities, Chat And Use Voice & Video Call For Free
          </Text>
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
          <Button
            _text={{ fontFamily: 'inter', color: 'coolGray.100' }}
            py={3}
            size="lg"
            mt="2"
            _light={{ borderRadius: 10 }}
            colorScheme="gray"
            onPress={() => navigation.navigate('Signup')}
          >
            Sign Up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
