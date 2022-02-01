import React from "react";
import { Center, Box, Button, Text } from "native-base";

export default function MeScreen(
  { navigation }: { navigation: any },
  { name }: { name: string }
) {
  return (
    <Center bg="#2F3136" px={3} flex={1}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Text color="gray.100">{name && `welcome back ${name}`}</Text>
        <Button mt="4" colorScheme="blue" onPress={() => navigation.goBack()}>
          Back to Login
        </Button>
      </Box>
    </Center>
  );
}
