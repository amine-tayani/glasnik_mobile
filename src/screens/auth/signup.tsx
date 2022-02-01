import * as React from "react";
import {
  Image,
  Center,
  VStack,
  Text,
  FormControl,
  Input,
  Button,
  HStack,
  Link,
  Box,
  Stack,
} from "native-base";

export default function SignUpScreen({ navigation }: { navigation: any }) {
  return (
    <Center bg="#1D232A" px={3} flex={1}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Stack alignItems="center" justifyContent="center">
          <Image
            size="xl"
            source={{
              uri: "https://res.cloudinary.com/glasnik/image/upload/v1642435474/media/adaptive-icon_upanud.png",
            }}
            alt="logo"
          />
        </Stack>

        <VStack mt="4">
          <FormControl>
            <FormControl.Label
              _text={{
                fontFamily: "inter",
                fontSize: "sm",
                color: "gray.100",
              }}
            >
              What's your email?
            </FormControl.Label>
            <Input
              py={3}
              variant="unstyled"
              fontFamily="inter"
              fontSize="sm"
              bg="#272D36"
              placeholder="Type an email"
              px={5}
              borderRadius={10}
              color="gray.100"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              mt={4}
              _text={{
                fontFamily: "inter",
                fontSize: "sm",
                color: "gray.100",
              }}
            >
              What should we call you ?
            </FormControl.Label>
            <Input
              py={3}
              variant="unstyled"
              fontFamily="inter"
              fontSize="sm"
              bg="#272D36"
              placeholder="Enter a username"
              px={5}
              borderRadius={10}
              color="gray.100"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              mt={4}
              _text={{
                fontFamily: "inter",
                fontSize: "sm",
                color: "gray.100",
              }}
            >
              Choose a nice password
            </FormControl.Label>

            <Input
              variant="unstyled"
              fontFamily="inter"
              fontSize="sm"
              bg="#272D36"
              px={5}
              py={3}
              borderRadius={10}
              color="gray.100"
              type="password"
              placeholder="Type a password"
            />
          </FormControl>
          <Button
            _text={{ fontFamily: "inter", color: "coolGray.100" }}
            py={3}
            size="lg"
            _light={{ bg: "#2563eb", borderRadius: 10 }}
            mt="6"
            colorScheme="blue"
            onPress={() => navigation.navigate("About", { name: "amine" })}
          >
            Sign up
          </Button>
          <HStack mt="6" alignItems="center">
            <Text
              fontFamily="inter"
              fontSize="sm"
              color="coolGray.300"
              _dark={{
                color: "gray.300",
              }}
            >
              Not registered yet.{" "}
            </Text>
            <Link
              isUnderlined={false}
              _text={{
                fontFamily: "inter",
                fontSize: "sm",
                color: "blue.500",
              }}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
