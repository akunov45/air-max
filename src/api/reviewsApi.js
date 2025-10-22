
import { supabase } from "./index"


export const getReviews = async () => {
  const { data: reviews, error } = await supabase
    .from('reviews')
    .select('*')
  console.log('REVIEWS:',reviews)
  return reviews;
}

getReviews();