import React from 'react'
import '../signuplogo/SignupLogo.css'
import Image1 from '../../images/Vectorgo.png'
import Image2 from '../../images/Vector.png'

const SignupLogo = (props) => {
  const { text } = props
  return (
    <div>
      <div className="h1t">
        <h1>Sign Up </h1>
      </div>
      <div className="h2t">
        <h2>with</h2>
      </div>

      <div>
        <img className="Vector1" src={Image1} alt={text} />
      </div>

      <div className="Vector2">
        <img src={Image2} alt="" />
      </div>
    </div>
  )
}

export default SignupLogo
