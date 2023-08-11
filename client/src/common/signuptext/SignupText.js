import React from 'react'
import '../signuptext/SignupText.css'

const SignupText = (props) => {
  const { text } = props
  return (
    <>
      <div>
        <h2 className="imageText_1">Welcome To</h2>
        <h2 className="imageText_2">Employee Portal</h2>
        <h4 className="imageText_3">
          Please Enter Your Info To Access <br></br>
        </h4>
        <h4 className="imageText_4">your Portal</h4>
      </div>
    </>
  )
}

export default SignupText
