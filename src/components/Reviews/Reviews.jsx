import Button from '../UI/Button';
import './Reviews.css';
import { getReviews } from '../../api/reviewsApi';
import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getReviews()
      setReviews(data)
    }
    fetchReviews()
  }, [])

  if (reviews.length === 0) {
    return (
      <h2>Loading...</h2>
    )
  }

  return (
    <div className='reviews'>
      <div className='r-header'>
        <h2 className='r-title'>Reviews</h2>
        <Button>
          See All
        </Button>
      </div>
      <div className='r-cards'>
        {reviews.map(item => {
          return (
            <div className='r-card' key={item.id}>
              {/* БЭМ - Блок, Элемент, Модификатор */}
              <div className='r-card-top'>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.comment}</p>
                  <p>
                    {Array.from({ length: item.rating }).map(num => <span>⭐</span>)}
                    {item.rating}
                  </p>
                </div>
                <img className='w-[64px] h-[64px] rounded-full' src={item.avatar_url} alt="img" />
              </div>
              <div className='r-card-bottom'>
                <img src={item.image} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Reviews