import React from 'react'
import '../passwordreset/SentLink.css'
import RightStar from '../../common/rightstar/RightStar'
import Vdst from '../../common/vdst/Vdst'
import Rememberme from '../../common/rememberme/Rememberme'
import { Link } from 'react-router-dom'

const SentLink = () => {
  return (
    <div className="SentLink">
      <div className="RSLeft">
        <div className="RSText">
          <div className="RST1">
            <h1 className="T0">Forgot Password</h1>
          </div>
          <div className="RST2">
            <h6 className="T1">You will receive an email with a link</h6>
          </div>
          <div className="RST3">
            <h6 className="T2">to reset your password. Please</h6>
          </div>
          <div className="RST4">
            <h6 className="T3"> check your inbox.</h6>
          </div>
          <div className="RSB1">
            <button className="RSEL">Resend Email Link</button>
          </div>
          <div className="RSB2">
            <Link to="/forgotpassword">
              <button className="RSEI">Change Email Id</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="RSRight">
        <RightStar></RightStar>
        <Vdst></Vdst>
        <Rememberme></Rememberme>
      </div>
    </div>
  )
}

export default SentLink
