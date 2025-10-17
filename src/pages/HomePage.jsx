import Hero from '../components/Hero/Hero'
import ProductList from '../components/ProductList/ProductList'

const HomePage = () => {
  return (
    <div className='app-container pt-[24px]'>
      <h1 className='text-[223px]  text-center font-[700] uppercase'>Do it
        <span className='text-[#4a69e2]'>right</span>
      </h1>
      <Hero />
      <ProductList />
    </div>
  )
}

export default HomePage