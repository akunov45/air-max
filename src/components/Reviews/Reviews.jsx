import { useEffect, useState } from "react";
import { getReviews } from "../../api/reviewsApi";
import Button from "../UI/Button";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getReviews();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  if (reviews.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="reviews">
      <div className="r-header flex justify-between items-center mb-8">
        <h2 className="r-title text-2xl font-bold">Reviews</h2>
        <Button>See All</Button>
      </div>

      <div className="r-cards flex flex-wrap gap-[16px] mb-[100px]">
        {reviews.map((item) => (
          <div
            className="r-card w-[420px] h-[500px] bg-white rounded-[32px]
             shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:scale-103"
            key={item.id}
          >
            <div className="r-card-top flex justify-between items-start p-6">
              <div>
                <h4 className="text-[#232321] text-[24px] font-semibold">
                  {item.name}
                </h4>
                <p className="text-[#232321] text-[16px] font-normal w-[293px] pt-[8px]">
                  {item.comment}
                </p>

                <div className="pt-[8px] pb-[32px] flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) =>
                    item.rating ? (
                      <StarSolid
                        key={item}
                        className="w-6 h-6 text-yellow-400 drop-shadow-md hover:scale-110 transition-transform"
                      />
                    ) : (
                      <StarOutline
                        key={item}
                        className="w-6 h-6 text-yellow-400"
                      />
                    )
                  )}
                  <span className="text-[#232321] text-[16px] font-[500] ml-[5px]">
                    5.0
                  </span>
                </div>
              </div>

              <img
                className="w-[64px] h-[64px] rounded-full object-cover"
                src={item.avatar_url}
                alt={item.name}
              />
            </div>

            <div className="r-card-bottom">
              <img
                className="w-full h-[325px] object-cover rounded-b-[32px]"
                src={item.image}
                alt={`Review by ${item.name}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

//БЭМ-БЛОК,ЭЛЕМЕНТ,МОДИФИКАТОР
