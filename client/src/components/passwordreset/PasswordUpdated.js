import React from 'react'
import '../../components/passwordreset/PasswordUpdated.css'
import RightStar from '../../common/rightstar/RightStar'
import Vdst from '../../common/vdst/Vdst'
import { Link } from 'react-router-dom'
import Rememberme from '../../common/rememberme/Rememberme'

const PasswordUpdated = () => {
  return (
    <div className="PasswordUpdated">
      <div className="PULeft">
        <div className="PUT1">
          <h1 className="PUText1">Password Updated</h1>
        </div>
        <div className="PUT2">
          <h6 className="PUText2">Your password has been updated</h6>
        </div>
        <div className="PUB">
          <Link to="/signin">
            <button className="PUBSI">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="PURight">
        <RightStar></RightStar>
        <Vdst></Vdst>
        <Rememberme></Rememberme>
      </div>
    </div>
  )
}

export default PasswordUpdated
