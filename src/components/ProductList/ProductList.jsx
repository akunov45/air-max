import Button from '../UI/Button'
import './ProductList.css'
import { useEffect } from 'react'

const ProductList = () => {
  useEffect(() => {
    
  })
  return (  
    <div>
      <div className='product-title'>
        <h2>Don’t miss out new drops</h2>
        <Button>
          Shop New Drops
        </Button>
          </div>
        <div className="drops">
        <div className="drop">
          <div className="img">
            <img src="https://www.tradesports.co.uk/cdn/shop/files/GY8424_01.jpg?v=1729251462" alt="" />
            <span>New</span>
          </div>
          <div className="title">
            <h4>ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
            <button>View product - <span>$125</span></button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProductList