import * as Yup from 'yup'

export const ForgotpasswordSchema = Yup.object({
  email: Yup.string().email().required('Please enter your registered email'),
})
