import * as Yup from 'yup'

export const NewcredentialsSchema = Yup.object({
  newPassword: Yup.string()
    .required('Please Enter your new password')
    .matches(
      '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
      'Must Contain 8 Characters, '
    ),
  reenterPassword: Yup.string()
    .required()
    .matches(
      '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    )
    .oneOf([Yup.ref('newPassword'), null], 'Password must match'),
})
