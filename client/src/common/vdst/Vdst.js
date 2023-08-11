import React from 'react'
import '../vdst/Vdst.css'
import VDST from '../../images/VDST.png'

const Vdst = (props) => {
  const { Vdst } = props
  return (
    <div className="VDST">
      <img src={VDST} alt={Vdst} />
    </div>
  )
}

export default Vdst
