import * as Yup from 'yup'

export const SigninSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
})
