import { supabase } from "./index"



export const products = [
  {
    id: 1,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    img: "/public/adidass.png",
    label: "New",
  },
  {
    id: 2,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    img: "/public/adi2.png",
    label: "New",
  },
  {
    id: 3,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    img: "/public/adi3.png",
    label: "New",
  },
  {
    id: 4,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    img: "/public/adi4.png",
    label: "New",
  },
]

export const getProducts = async () => {

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
  console.log(products)
  return products;
}

getProducts();