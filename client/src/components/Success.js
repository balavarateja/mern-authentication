import React from 'react'
import Image from '../images/Rectangle.png'
import '../components/Success.css'
import LeftStar from '../common/leftstar/LeftStar'
import SignupText from '../common/signuptext/SignupText'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="Success">
      <img className="Full" src={Image} alt="" />
      <div className="SLeft">
        <div className="Star">
          <LeftStar></LeftStar>
          <SignupText></SignupText>
        </div>
      </div>
      <div className="SIB-SU">
        <Link to="/SignIn">
          <button className="SIB-SI">Sign In</button>
        </Link>
      </div>

      <div className="SRight">
        <div className="t1">
          <h1>Congratulations</h1>
        </div>
        <div className="t2">
          <p>You Are Successfully Signup</p>
        </div>
      </div>
    </div>
  )
}

export default Success
