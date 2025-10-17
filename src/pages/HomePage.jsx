import Hero from '../components/Hero/Hero'
import ProductList from '../components/ProductList/ProductList'
import { getProducts } from "../api/productsApi"
import Categories from '../components/Categories/Categories'

const HomePage = () => {
  return (
    <div className='app-container pt-[24px]'>
      <h1 className='text-[223px]  text-center font-[700] uppercase'>Do it
         <span className='text-[#4a69e2]'>right</span></h1>
         <Hero/>
         <ProductList/>
         <Categories/>
    </div>
  )
}

export default HomePage