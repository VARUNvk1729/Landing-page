import React from 'react'
import './First.css'
const first = ({ imageSrc }) => {
  return (
    <div className="first">
        <img src={imageSrc} alt="Background-image" className="first_image" />
        <h1 className="first_title">Riding is fun</h1>
    </div>
  )
}

export default first