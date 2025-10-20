import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "/adidas.png";
import "/jordan.png";
const categories = [
  {
    title: "LIFESTYLE SHOES",
    img: "/public/adidas.png",
  },
  {
    title: "BASKETBALL SHOES",
    img: "/public/jordan.png",
  },
  {
    title: "GOLF SHOES",
    img: "https://www.pumagolf.com/cdn/shop/files/379465_02_sv01_1500x.jpg?v=1750781559",
  },
  {
    title: "SNEAKER SHOES",
    img:"https://plaeto.in/cdn/shop/files/1_353aad53-b809-446e-9386-89e1dae6374b.jpg?v=1754980288"
},
  {
    title: "RUNNING SHOES",
    img: "https://www.omegawalk.com/cdn/shop/products/venture-594938.jpg?v=1702663625",
  },
];

const ShoeButs = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="bg-[#232321] text-white py-12 rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[74px] font-[600] px-[60px]">CATEGORIES</h2>
        <div className="flex gap-3 px-[60px]">
          <button
            ref={prevRef}
            className="w-10 h-10 flex items-center justify-center
             bg-[white] text-[black] rounded-md hover:bg-[#E7E7E3] transition text-lg"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 flex items-center justify-center
             bg-[white] text-[black] rounded-md hover:bg-[#E7E7E3] transition text-lg"
          >
            ›
          </button>
        </div>
      </div>

      <div className="ml-[120px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          loop={true}
          onSwiper={setSwiper}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-[#f5f5f5] text-black 
                h-[600px] w-[690px] shadow-lg mt-[20px] 
               flex items-center justify-center flex-col 
               rounded-[36px] overflow-hidden
            "
              >
                <img className="w-[570px] h-[600px] ml-[-60px]" src={cat.img} alt="" />
                <div className="flex absolute items-center gap-[260px] ml-[-60px] mt-[400px]">
                  <h3 className="text-[36px] font-[600] w-[190px]">
                    {cat.title}
                  </h3>

                  <button className="w-[48px] h-[48px] bg-[#232321] text-[white] rounded-[8px]">
                    ↗
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShoeButs;
