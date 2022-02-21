import * as yup from 'yup';

export const signUpFormValidationSchema = yup.object({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('*Email is required. Please fill in field'),
  username: yup
    .string()
    .trim()
    .required('*Username is required. Please fill in field')
    .min(4, '*Username must be 5 characters at least.')
    .max(25, '*Username must be 25 characters maximum.'),
  password: yup
    .string()
    .trim()
    .required('*Password is required. Please fill in field')
    .min(8, '*Password must be 5 characters at least.')
    .max(25, '*Password must be 25 characters maximum.'),
});

export const loginFormValidationSchema = {};
