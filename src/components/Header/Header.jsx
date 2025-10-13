
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="menu flex gap-[40px]"> 
        <a href="">New Drops 🔥</a>
        <a href="">Men </a>
        <a href="">Women </a>
         </div>
      <div className="logo"> 
        <img className='w-[128px]' src="/public/logo.png" alt="" />
         </div>
      <div className="btns flex items-center gap-[42px]"> 
        <span><CiSearch /></span>
        <span><FaUser /></span>
        <span className='span'> 0 </span>
         </div>
    </div>
  )
}

export default Header