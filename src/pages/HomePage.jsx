
import React from 'react'
import Hero from '../components/Hero/Hero'

const HomePage = () => {
  return (
    <div className='app-container'>
      <h1 className='text-[223px] uppergcase font-[700]'> 
      DO IT 
      <span className='text-[#4A69E2]'> RIGHT</span>
      </h1>
      <Hero/>
    </div>
  )
}

export default HomePage