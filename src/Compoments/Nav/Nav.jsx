import React from 'react'
import './Nav.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='Navigation'>
      <Link className='nav' to={"/"}>Home </Link>
      <Link className='nav' to={"/"}>Plans </Link>
      <Link className='nav' to={"/"}>About </Link>
      <Link className='nav' to={"/"}>Contact Us</Link>
    </div>
  )
}

export default Nav
