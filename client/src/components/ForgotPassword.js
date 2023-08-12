import React, { useState } from 'react'
import '../components/ForgotPassword.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import RightStar from '../common/rightstar/RightStar'
import Forgottext from '../common/forgottext/Forgottext'
import SignupText from '../common/signuptext/SignupText'
import Rememberme from '../common/rememberme/Rememberme'
import Vdst from '../common/vdst/Vdst'
import axios from 'axios'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const handleFPEmailId = (e) => {
    setEmail(e.target.value)
  }
  const navigate = useNavigate('')
  const handleSubmitFP = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:8002/api/user/forgot-password', {
        email: email,
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data)
        alert('Successfully Link sent')
        navigate('/token')
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
        alert(err.response)
      })
  }

  return (
    <div className="FP">
      <Forgottext></Forgottext>
      <div className="FPLeft">
        <div className="A">
          <form onSubmit={handleSubmitFP}>
            <div className="ForgetEmail">
              <input
                className="ForgetEmailInput"
                type="email"
                value={email}
                onChange={handleFPEmailId}
                placeholder="Email Id"
                name="Email Id"
              ></input>
              <span className="FLabel">Please enter your registered email</span>
            </div>

            <div className="SUBFP">
              <button className="SIBFP" type="submit" value="Login">
                Request reset password link
              </button>
            </div>
          </form>
          <div className="FPB">
            <Link to="/">
              <button className="FPCancel">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="FPRight">
        <RightStar></RightStar>
        <Vdst></Vdst>
        <Rememberme></Rememberme>
      </div>
    </div>
  )
}

export default ForgotPassword
