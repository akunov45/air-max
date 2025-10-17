
import React from 'react'
import Hero from '../components/Hero/Hero'
import ProductList from '../components/ProductList/ProductList'
import ShoeButs from '../components/ShoesButs/ShoeButs'
const HomePage = () => {
  return (
    <div className='app-container pt-[24px]'>
      <h1 className='text-[223px] uppercase text-center font-[700]'>
        Do it 
        <span className='text-[#4A69E2]'> right</span>
        </h1>
          <Hero/>
          <ProductList/>
          <ShoeButs/>
    </div>
  )
}

export default HomePage