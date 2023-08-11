import React from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LeftStar from '../common/leftstar/LeftStar'
import SignupText from '../common/signuptext/SignupText'
import SignupLogo from '../common/signuplogo/SignupLogo'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [color, setColor] = useState('')
  const navigate = useNavigate('')

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleSignUpId = (e) => {
    setEmail(e.target.value)
  }
  const handleSignUpPassword = (e) => {
    setPassword(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleSubmitSU = (e) => {
    e.preventDefault()
    // const data = res.body
    let signupobj = { firstName, lastName, email, password, phoneNumber }
    // console.log(signupobj)
    fetch('http://localhost:8002/api/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(signupobj),
    })
      .then((response) => {
        // console.log(response.data)
        alert('Successfully Registered')
        navigate('/success')
      })
      .catch((err) => {
        alert(err.response.data.error.message)
      })
    // result = await result.json()
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
          <form className="InputFormSU" onSubmit={handleSubmitSU}>
            <div className="InputSU">
              <input
                type="text"
                placeholder="First Name"
                className="SignUpEmailInput"
                value={firstName}
                onChange={handleFirstName}
                required
              />
              <span>please enter firstName</span>
              <input
                type="text"
                placeholder="Last Name"
                className="SignUpEmailInput"
                value={lastName}
                onChange={handleLastName}
              />
              <input
                type="email"
                placeholder="User Id / Email Id"
                className="SignUpEmailInput"
                value={email}
                onChange={handleSignUpId}
              />
              <input
                type="password"
                placeholder="Password"
                className="SignUpEmailInput"
                value={password}
                onChange={handleSignUpPassword}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="SignUpEmailInput"
                value={phoneNumber}
                onChange={handlePhone}
              />
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
