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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)

  const handleSignInId = (e) => {
    setEmail(e.target.value)
  }
  const handleSignInPassword = (e) => {
    setPassword(e.target.value)
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

  const handleSubmitSI = (e) => {
    e.preventDefault()
    // const data = res.body
    axios
      .post('http://localhost:8002/signin', {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data)
        alert('Successfully LoggedIn')
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
        alert(err.response.data.error.message)
      })
  }

  return (
    <div className="SignIn">
      <div className="SILeft">
        <div className="SILogo">
          <LogoText></LogoText>
        </div>
        <div className="SIF">
          <form onSubmit={handleSubmitSI} className="InputForm">
            <div className="InputSI">
              <input
                className="LoginEmailInput"
                type="text"
                placeholder="User Id / Email Id"
                value={email}
                onChange={handleSignInId}
              />
              <div className="B">
                <input
                  className="InputPassword "
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={handleSignInPassword}
                  styles={{ border: 'hiddden' }}
                />
                <IconButton className="Icon" styles={{}}>
                  <EndAdorment />
                </IconButton>
              </div>

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
