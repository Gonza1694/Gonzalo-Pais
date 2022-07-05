import React from 'react'
import './Logo.css'
import myImg from '../../../img/logo-head.png'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={myImg} className="logo" />
      <h3>Baloo Home</h3>
    </div>
  )
}

export default Logo