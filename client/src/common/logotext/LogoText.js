import React from 'react'
import '../logotext/LogoText.css'
import Image3 from '../../images/Vectorgo.png'
import Image4 from '../../images/Vector.png'

const LogoText = (props) => {
  const { text } = props
  return (
    <>
      <div className="H3t">
        <h1>Sign In </h1>
      </div>
      <div className="H4t">
        <h2>with</h2>
      </div>

      <div>
        <img className="Vector3" src={Image3} alt={text} />
      </div>

      <div className="Vector4">
        <img src={Image4} alt="" />
      </div>
    </>
  )
}

export default LogoText
