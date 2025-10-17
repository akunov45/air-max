import React, { useState } from "react";
import "./Categories.css";

const shoes = [
  { title: "LIFESTYLE SHOES", img: "/public/lifestyle.png" },
  { title: "BASKETBALL SHOES", img: "/public/basket.png" },
  { title: "RUNNING SHOES", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3138c8f0-5929-48d7-8c58-9126f53d8463/NIKE+INTERACT+RUN+EASYON.png" },
  { title: "OUTDOOR SHOES", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIHUYKEkrSnbkMXBx-ASoPHws537InsqwNQ&s" },
  { title: "GOLF SHOES", img: "https://www.pumagolf.com/cdn/shop/files/379465_02_sv01_1500x.jpg?v=1750781559" },
  { title: "HIKING SHOES", img: "https://cdn.shopify.com/s/files/1/0607/3263/7348/files/5a80ee61a957b347f74388d9d955af21256bce1c.jpg?v=1689915220" },
  { title: "TENNIS SHOES", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_1tTBmdyDtmsTNWyd2PTYsuqVA2RsMAU7g&s" },
  { title: "SKATE SHOES", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/6619bc25-202e-4557-9267-c2b109efc2ec/NIKE+SB+DAY+ONE+%28GS%29.png" },
];

export default function Categories() {
  const [i, setI] = useState(0);
  const step = 2;
  const next = () => setI(i + step < shoes.length ? i + step : i);
  const prev = () => setI(i > 0 ? i - step : 0);

  return (
    <div className="categories-section">
      <div className="categories-header">
        <h1>CATEGORIES</h1>
        <div className="arr1">
          <button onClick={prev} className="arr1-btn gray" disabled={i === 0}>
            ‹
          </button>
          <button
            onClick={next}
            className="arr1-btn white"
            disabled={i + step >= shoes.length}
          >
            ›
          </button>
        </div>
      </div>

      <div className="categories-cards">
        {shoes.slice(i, i + step).map((s, n) => (
          <div key={n} className="category-card">
            <img src={s.img} alt={s.title} />
            <h3>{s.title}</h3>
            <button className="open-btn">
              <img src="/public/image.png" alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
