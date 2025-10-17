import { supabase } from "./index"


export const getProducts = async () => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
  console.log(products)
  return products;
}

getProducts();