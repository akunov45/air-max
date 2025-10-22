import { useEffect, useState } from 'react'
import { getProducts } from '../../api/productsApi.js'
import Button from '../UI/Button'
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([])

useEffect(() => {
  const fetchProducts = async () => {
    const data = await getProducts()
    const updated = data.map(p => ({ ...p, is_new: true }))
    setProducts(updated || [])
  }
  fetchProducts()
}, [])


if(products.length === 0){
  return (
    <h2>Loading...</h2>
  )
}

  const allProducts = [...products,]

  return (
    <div>
      <div className="product-title">
        <h2>Don’t miss out new drops</h2>
        <Button>Shop New Drops</Button>
      </div>

      <div className="drops  flex items-center justify-center gap-[16px] flex-wrap">
        {allProducts?.length > 0 ? (
          allProducts.map((item) => (
            <div className="drop rounded-[28px]" key={item.id}>
              <div className="img bg-[white]">
                <img src={item.images[0] || '/public/jordan.png'} alt={item.name} />
                {item.is_new && <span>New</span>}
              </div>
              <div className="title">
                <h4 className='line-clamp-1'>{item.name}</h4>
                <button>
                  View product - <span>${item.price}</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  )
}

export default ProductList
