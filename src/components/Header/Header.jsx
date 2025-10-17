import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import './Header.css'

const Header = () => {
  return (
    <div className="header app-container">
      <div className='menu flex gap-[40px]'>
        <a href="">New Drops 🔥</a>
        <a href="">Men </a>
        <a href="">Women</a>
      </div>
      <div className='logo'>
        <img className="w-[128px]" src="/logo.png" alt="" />
      </div>
      <div className='btns flex items-center gap-[42px]'>
        <span><IoSearch /></span>
        <span><FaUser /></span>
        <span className="span" > 0 </span>
      </div>
    </div>
  )
}

export default Header