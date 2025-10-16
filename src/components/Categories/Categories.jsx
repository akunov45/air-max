import React, { useState } from "react";
import "./Categories.css";

const Shoes = [
  { title: "LIFESTYLE SHOES", img: "/public/lifestyle.png" },
  { title: "BASKETBALL SHOES", img: "/public/basket.png" },
  { title: "RUNNING SHOES", img: "" },
  { title: "OUTDOOR SHOES", img: "" },
  { title: "GOLF SHOES", img: "" },
  { title: "HIKING SHOES", img: "" },
  { title: "TENNIS SHOES", img: "" },
  { title: "SKATE SHOES", img: "" },
];

const Categories = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 2;

  const nextSlide = () => {
    if (index + itemsPerPage < Shoes.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - itemsPerPage);
    }
  };

  const visibleShoes = Shoes.slice(index, index + itemsPerPage);

  return (
    <div className="categories-section">
      <div className="categories-header">
        <h1>CATEGORIES</h1>
        <div className="arr1">
          <button
            onClick={prevSlide}
            className={`arr1-btn gray ${index === 0 ? "disabled" : ""}`}
            disabled={index === 0}
          >
            &#x2039;
          </button>
          <button
            onClick={nextSlide}
            className={`arr1-btn white ${
              index + itemsPerPage >= Shoes.length ? "disabled" : ""
            }`}
            disabled={index + itemsPerPage >= Shoes.length}
          >
            &#x203A;
          </button>
        </div>
      </div>

      <div className="categories-cards">
        {visibleShoes.map((shoe, i) => (
          <div key={i} className="category-card">
            <img src={shoe.img} alt={shoe.title} />
            <h3>{shoe.title}</h3>   
            <button className="open-btn">↗</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
