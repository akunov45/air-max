
import React from 'react'
import Hero from '../components/Hero/Hero'

const HomePage = () => {
  return (
    <div className='app-container pt-[24px]'>
      <h1 className='text-[223px]  text-center font-[700] uppercase'>Do it
         <span className='text-[#4a69e2]'>right</span></h1>
         <Hero/>
    </div>
  )
}

export default HomePage