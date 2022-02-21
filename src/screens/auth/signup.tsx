import * as React from 'react';
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
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import { RootStackParamList } from '../../navigations/MainStackNavigator';
import { signUpFormValidationSchema } from '../../utils/validateSchema';

type SignupScreenProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

export default function SignUpScreen() {
  const navigation = useNavigation<SignupScreenProp>();
  const { handleChange, handleSubmit, errors } = useFormik({
    validationSchema: signUpFormValidationSchema,
    initialValues: { email: '', username: '', password: '' },
    onSubmit: (values) => console.log(values),
  });

  return (
    <Center bg="#1D232A" px={3} flex={1}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Stack alignItems="center" justifyContent="center">
          <Image
            size="xl"
            source={{
              uri: 'https://res.cloudinary.com/glasnik/image/upload/v1642435474/media/adaptive-icon_upanud.png',
            }}
            alt="logo"
          />
        </Stack>

        <VStack mt="4">
          {errors.email && (
            <Text my={2} color="red.400">
              {errors.email}
            </Text>
          )}
          <FormControl>
            <FormControl.Label
              _text={{
                fontFamily: 'inter',
                fontSize: 'sm',
                color: 'gray.100',
              }}
            >
              What&#39;s your email?
            </FormControl.Label>
            <Input
              onChangeText={handleChange('email')}
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
          {errors.username && (
            <Text my={2} color="red.400">
              {errors.username}
            </Text>
          )}
          <FormControl>
            <FormControl.Label
              mt={4}
              _text={{
                fontFamily: 'inter',
                fontSize: 'sm',
                color: 'gray.100',
              }}
            >
              What should we call you ?
            </FormControl.Label>
            <Input
              onChangeText={handleChange('username')}
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
            {errors.password && (
              <Text my={2} color="red.400">
                {errors.password}
              </Text>
            )}
            <FormControl.Label
              mt={4}
              _text={{
                fontFamily: 'inter',
                fontSize: 'sm',
                color: 'gray.100',
              }}
            >
              Choose a nice password
            </FormControl.Label>
            <Input
              onChangeText={handleChange('password')}
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
            _text={{ fontFamily: 'inter', color: 'coolGray.100' }}
            py={3}
            size="lg"
            _light={{ bg: '#2563eb', borderRadius: 10 }}
            mt="6"
            colorScheme="blue"
            onPress={() => handleSubmit}
          >
            Sign up
          </Button>
          <HStack mt="6" alignItems="center">
            <Text
              fontFamily="inter"
              fontSize="sm"
              color="coolGray.300"
              _dark={{
                color: 'gray.300',
              }}
            >
              Not registered yet.
            </Text>
            <Link
              href="#l"
              isUnderlined={false}
              _text={{
                fontFamily: 'inter',
                fontSize: 'sm',
                color: 'blue.500',
              }}
              onPress={() => navigation.navigate('Login')}
            >
              Login
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
