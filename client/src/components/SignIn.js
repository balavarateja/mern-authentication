import React from 'react'
import './Signin.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import RightStar from '../common/rightstar/RightStar'
import SignInText from '../common/signintext/SignInText'
import LogoText from '../common/logotext/LogoText'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

const SignIn = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const handleSignInId = (e) => {
  //   setEmail(e.target.value)
  // }
  // const handleSignInPassword = (e) => {
  //   setPassword(e.target.value)
  // }
  const [visible, setVisible] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    if (formData.email === '') {
      err.email = 'Please enter Email'
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!regex.test(formData.email)) {
        err.email = 'Please enter valid Email Id'
      }
    }
    if (formData.password === '') {
      err.password = 'Please enter password'
    } else {
      let regex =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      if (!regex.test(formData.password)) {
        err.email =
          'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!'
      }
    }

    setFormError({ ...err })

    return Object.keys(err).length < 1
  }

  const EndAdorment = (visible, setVisible) => {
    return (
      <>
        <InputAdornment position="end">
          <div>
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              className="Icon"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
        </InputAdornment>
      </>
    )
  }
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  // const handleSubmitSI = (e) => {
  //   e.preventDefault()
  //   const data = res.body
  //   axios
  //     .post('http://localhost:8002/signin', {
  //       email: email,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //       alert('Successfully LoggedIn')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       console.log(err.response)
  //       alert(err.response.data.error.message)
  //     })
  // }

  const onSubmitHandlerSI = (event) => {
    event.preventDefault()
    console.log('Form Data:', formData)
    let isValid = validateForm()

    if (isValid) {
      alert('Submitted')
      //API call to server
      fetch('http://localhost:8002/signin', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          alert('Successfully Signed In')
          // navigate('/success')
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
    <div className="SignIn">
      <div className="SILeft">
        <div className="SILogo">
          <LogoText></LogoText>
        </div>
        <div className="SIF">
          <form onSubmit={onSubmitHandlerSI} className="InputForm">
            <div className="InputSI">
              <input
                className="LoginEmailInput"
                type="text"
                placeholder="User Id / Email Id"
                name="email"
                onChange={onChangeHandler}
                value={formData.email}
              />
              <span className="non-valid">{formError.email}</span>
              <div className="B">
                <input
                  className="InputPassword "
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  onChange={onChangeHandler}
                  value={formData.password}
                />
                <IconButton className="Icon" styles={{}}>
                  <EndAdorment />
                </IconButton>
              </div>
              <span className="non-valid">{formError.password}</span>

              <div className="RM">
                <input type="checkbox" />
                <label className="checkbox">Remember Me</label>
              </div>
              <div className="SIB">
                <button className="SIBS" type="submit" value="Login">
                  Sign In
                </button>
              </div>
              <div className="BtnF">
                <Link to="/forgotpassword">
                  <button className="BtnFP">forgot password</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="SIRight">
        <div className="StarRightSI">
          <div>
            <RightStar></RightStar>
            <SignInText></SignInText>
          </div>
          <div className="btnSU">
            <Link to="/">
              <button className="SUBI">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
