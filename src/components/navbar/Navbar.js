import React from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <h1><span><BsFillHouseFill/>Safari</span>Towers</h1>
        <button className='btn'>Sign In</button>
                <ul className='nav-menu'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Search</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
           

      </div>
    </div>
  )
}

export default Navbar
