
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import logo from "../../../public/logo.svg"
import './Header.css'

const Header = () => {
  return (
    <div className=' app-container header  flex justify-between items-center py-[32px] bg-[#fafafa] rounded-[24px] px-[32px]'>
      <div className='menu flex gap-[40px]'>
        <a href="">New Drops 🔥</a>
        <a href="">Men</a>
        <a href="">Women</a>
      </div>
      <div>
        <img className='logo w-[128px] h-[32px]' src={logo} alt="" />
      </div>
      <div className='btns flex items-center gap-[42px]'>
        <span><IoSearch/></span>
        <span><FaUser/></span>
        <span className='bg-[#FFA52F] h-[32px] w-[32px] rounded-full flex items-center justify-center'> 0 </span>
      </div>
    </div>
  )
}

export default Header