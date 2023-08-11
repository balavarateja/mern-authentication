import React from 'react'
import '../rightstar/RightStar.css'
import RStar from '../../images/Star_R.png'

const RightStar = (props) => {
  const { RightStar } = props
  return (
    <div>
      <img
        className="right-image"
        src={RStar}
        alt={RightStar}
        style={{ zIndex: '-5' }}
      />
    </div>
  )
}

export default RightStar
