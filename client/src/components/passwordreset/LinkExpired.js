import React from 'react'
import '../passwordreset/LinkExpired.css'
import RightStar from '../../common/rightstar/RightStar'
import Vdst from '../../common/vdst/Vdst'
import Rememberme from '../../common/rememberme/Rememberme'
import { Link } from 'react-router-dom'

const LinkExpired = () => {
  return (
    <div className="LinkExpired">
      <div className="LELeft">
        <div className="LEText">
          <div className="LET1">
            <h1 className="T0">LINK EXPIRED</h1>
          </div>
          <div className="LET2">
            <h6 className="T1">Your link has expired, because you</h6>
          </div>
          <div className="LET3">
            <h6 className="T2">haven't used it. Reset password link</h6>
          </div>
          <div className="LET4">
            <h6 className="T3">expires in every 24 hours and can be</h6>
          </div>
          <div className="LET5">
            <h6 className="T4">used only once. You can create one by</h6>
          </div>
          <div className="LET6">
            <h6 className="T5">clicking the button below.</h6>
          </div>
          <div className="LEB1">
            <button className="LEEL">Resend another link</button>
          </div>
          <div className="LEB2">
            <Link to="/signin">
              <button className="LEEI">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="LERight">
        <RightStar></RightStar>
        <Vdst></Vdst>
        <Rememberme></Rememberme>
      </div>
    </div>
  )
}

export default LinkExpired
