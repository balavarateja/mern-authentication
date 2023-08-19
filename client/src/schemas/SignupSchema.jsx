import * as Yup from 'yup'

export const SignupSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(16)
    .required('Please enter your First Name'),
  lastName: Yup.string().min(2).max(16).required('Please enter your Last Name'),
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  phoneNumber: Yup.string()
    .min(10)
    .required('please enter your 10 digit number'),
})
