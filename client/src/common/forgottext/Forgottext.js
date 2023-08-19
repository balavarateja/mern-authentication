import React from 'react'
import '../forgottext/Forgottext.css'

const Forgottext = (props) => {
  const { text } = props
  return (
    <>
      <div className="text1">
        <h3>Forgot Password </h3>
      </div>

      <div className="text2">
        <h6 className="T1">Enter the Email Associated with your</h6>
      </div>
      <div className="text3">
        <h6 className="T2">account we'll send a link to reset</h6>
      </div>
      <div className="text4">
        <h6 className="T3">your password</h6>
      </div>
    </>
  )
}

export default Forgottext
