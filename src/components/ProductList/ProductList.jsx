import Button from '../UI/Button'
import './ProductList.css'
import { useEffect, useState } from 'react'
import { products } from '../../api/productsApi'

const ProductList = () => {
  const [drops, setDrops] = useState([])

  useEffect(() => {
    setDrops(products)
  }, [])

  return (
    <div>
      <div className='product-title'>
        <h2>Don’t miss out new drops</h2>
        <Button>
          Shop New Drops
        </Button>
      </div>

      <div className="drops flex gap-[55px]">
        {drops.map(drop => (
          <div className="drop" key={drop.id}>
            <div className="img">
              <img src={drop.img} alt="" />
              <span>{drop.label}</span>
            </div>
            <div className="title">
              <h4>{drop.name}</h4>
              <button>
                View product - <span>${drop.price}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
