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
import { useMutation } from '@apollo/client';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RootStackParamList } from '../../navigations/MainStackNavigator';
import { signUpFormValidationSchema } from '../../utils/validateSchema';
import {
  CreateAccountMutation,
  CreateAccountMutationVariables,
  CreateAccountDocument,
} from '../../common/generated/graphql';

type SignupScreenProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

type FormInput = {
  email: string;
  username: string;
  password: string;
};

export default function SignUpScreen() {
  const navigation = useNavigation<SignupScreenProp>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({ resolver: yupResolver(signUpFormValidationSchema), mode: 'onBlur' });

  const [CreateAccountMutation, { loading, error }] = useMutation<
    CreateAccountMutation,
    CreateAccountMutationVariables
  >(CreateAccountDocument, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const handleSignupPress = (data: FormInput) => {
    try {
      CreateAccountMutation({
        variables: { email: data.email, username: data.username, password: data.password },
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          {loading && (
            <Text my={1} color="white">
              loading...
            </Text>
          )}

          {error?.networkError && (
            <Text my={1} color="red.500">
              {error.message}
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
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  keyboardType="email-address"
                  keyboardAppearance="dark"
                  py={3}
                  variant="unstyled"
                  fontFamily="inter"
                  fontSize="sm"
                  bg="#272D36"
                  placeholder="Type an email"
                  px={5}
                  borderRadius={10}
                  color="gray.100"
                  value={value}
                  onChangeText={(v) => onChange(v)}
                />
              )}
            />
            {errors.email && <FormControl.ErrorMessage>{errors?.email}</FormControl.ErrorMessage>}
          </FormControl>

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
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, value } }) => (
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
                  value={value}
                  onChangeText={(v) => onChange(v)}
                />
              )}
            />
            <FormControl.ErrorMessage>
              {errors.username && <Text>{errors?.username}</Text>}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl>
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
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
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
                  value={value}
                  onChangeText={(v) => onChange(v)}
                />
              )}
            />
            <FormControl.ErrorMessage>
              {errors.password && <Text>{errors?.password}</Text>}
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            _text={{ fontFamily: 'inter', color: 'coolGray.100' }}
            py={3}
            size="lg"
            _light={{ bg: '#2563eb', borderRadius: 10 }}
            mt="6"
            colorScheme="blue"
            onPress={handleSubmit(handleSignupPress)}
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
