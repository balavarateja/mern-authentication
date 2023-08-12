import React from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LeftStar from '../common/leftstar/LeftStar'
import SignupText from '../common/signuptext/SignupText'
import SignupLogo from '../common/signuplogo/SignupLogo'

const SignUp = (props) => {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [phoneNumber, setPhone] = useState('')
  // const navigate = useNavigate('')

  // const handleFirstName = (e) => {
  //   setFirstName(e.target.value)
  // }
  // const handleLastName = (e) => {
  //   setLastName(e.target.value)
  // }

  // const handleSignUpId = (e) => {
  //   setEmail(e.target.value)
  // }
  // const handleSignUpPassword = (e) => {
  //   setPassword(e.target.value)
  // }
  // const handlePhone = (e) => {
  //   setPhone(e.target.value)
  // }
  // const handleSubmitSU = (e) => {
  //   e.preventDefault()

  //   let signupobj = { firstName, lastName, email, password, phoneNumber }

  //   fetch('http://localhost:8002/api/user/signup', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //     body: JSON.stringify(signupobj),
  //   })
  //     .then((response) => {

  //       alert('Successfully Registered')
  //       navigate('/success')
  //     })
  //     .catch((err) => {
  //       alert(err.response.data.error.message)
  //     })

  // }
  const navigate = useNavigate('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  })
  const [formError, setFormError] = useState({})

  const onChangeHandler = (event) => {
    console.log(event)
    if (event.target.name === 'languages') {
      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(
          (el) => el !== event.target.value
        )
      }

      setFormData(copy)
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }))
    }
  }

  const validateForm = () => {
    let err = {}

    if (formData.firstName === '') {
      err.firstName = 'Please enter first name required!'
    }
    if (formData.lastName === '') {
      err.lastName = 'Please enter last name required!'
    }
    if (formData.email === '') {
      err.email = 'Email required!'
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!regex.test(formData.email)) {
        err.email = 'Please enter a valid email address'
      }
    }
    if (formData.password === '') {
      err.password =
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!'
    } else {
      let regex =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      if (!regex.test(formData.password)) {
        err.email = 'password not valid!'
      }
    }
    if (formData.phoneNumber === '') {
      err.phoneNumber = 'phone number is required!'
    }

    setFormError({ ...err })

    return Object.keys(err).length < 1
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log('Form Data:', formData)
    let isValid = validateForm()

    if (isValid) {
      alert('Submitted')
      //API call to server
      // let signupobj = { firstName, lastName, email, password, phoneNumber }

      fetch('http://localhost:8002/api/user/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          alert('Successfully Registered')
          navigate('/success')
        })
        .catch((err) => {
          alert(err.response.data.error.message)
        })
    } else {
      alert('In-Valid Form')
    }
    console.log(isValid)
  }

  return (
    <div className="Signup">
      <div className="SuLeft">
        <div>
          <LeftStar></LeftStar>
          <SignupText></SignupText>
        </div>
        <div className="SIB-SU">
          <Link to="./SignIn">
            <button className="SIB-SI">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="SuRight">
        <div className="LogoSu">
          <SignupLogo></SignupLogo>
        </div>
        <div className="FormSU">
          <form className="InputFormSU" onSubmit={onSubmitHandler}>
            <div className="InputSU">
              <input
                type="text"
                placeholder="First Name"
                className="SignUpEmailInput"
                name="firstName"
                onChange={onChangeHandler}
                value={formData.firstName}
              />
              <span className="non-valid">{formError.firstName}</span>
              <input
                type="text"
                placeholder="Last Name"
                className="SignUpEmailInput"
                name="lastName"
                onChange={onChangeHandler}
                value={formData.lastName}
              />
              <span className="non-valid">{formError.lastName}</span>
              <input
                type="email"
                placeholder="User Id / Email Id"
                className="SignUpEmailInput"
                name="email"
                onChange={onChangeHandler}
                value={formData.email}
              />
              <span className="non-valid">{formError.email}</span>
              <input
                type="password"
                placeholder="Password"
                className="SignUpEmailInput"
                name="password"
                onChange={onChangeHandler}
                value={formData.password}
              />
              <span className="non-valid">{formError.password}</span>
              <input
                type="text"
                placeholder="Phone Number"
                className="SignUpEmailInput"
                name="phoneNumber"
                onChange={onChangeHandler}
                value={formData.phoneNumber}
              />
              <span className="non-valid">{formError.phoneNumber}</span>
              <div className="SUBU">
                <button className="SUBSU" type="submit">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
