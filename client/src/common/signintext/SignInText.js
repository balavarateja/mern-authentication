import React from 'react'
import '../signintext/SignInText.css'

const SignInText = (props) => {
  const { text } = props
  return (
    <div>
      <>
        <div>
          <h2 className="imageText_5">Welcome To</h2>
          <h2 className="imageText_6">Employee Portal</h2>
          <h4 className="imageText_7">Please Enter Your Info To Access</h4>
          <h4 className="imageText_8">your Portal</h4>
        </div>
      </>
    </div>
  )
}

export default SignInText
