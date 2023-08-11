const { check, validationResult } = require('express-validator')

exports.validateUser = [
  check('firstName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('the name feild is missing')
    .isLength({ min: 3, max: 20 })
    .withMessage('the name must be 3 to 20 characters in length'),
  check('lastName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('the name feild is missing')
    .isLength({ min: 3, max: 20 })
    .withMessage('the name must be 3 to 20 characters in length'),
  check('email').normalizeEmail().isEmail().withMessage('Invalid Email'),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('password is missing')
    .isLength({ min: 8, max: 20 })
    .withMessage('the password must be 8 to 20 characters in length'),
  check('phoneNumber')
    .trim()
    .not()
    .isEmpty()
    .withMessage('phone number is missing')
    .isLength(10)
    .withMessage('enter valid phone number'),
]

exports.validate = (req, res, next) => {
  const error = validationResult(req).array()
  if (error.length) {
    return res.json({ error: error[0].msg })
  }

  next()
}

exports.validatePassword = [
  check('newPassword')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is missing!')
    .isLength({ min: 8, max: 20 })
    .withMessage('Password must be 8 to 20 characters long!'),
]
