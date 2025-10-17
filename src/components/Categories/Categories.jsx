import React, { useEffect, useRef } from 'react';
import './Categories.css';
// Все локальные импорты удалены, чтобы избежать ошибок компиляции.
// Swiper, стили и изображения будут загружаться иначе.

// ВАЖНО: Замените эти URL-адреса на ссылки на ваши реальные изображения.
// Я использую временные изображения-заглушки (placeholders).
const lifestyleShoeURL = '../../../public/boots1.png';
const basketballShoeURL = '/public/boots2.png';
// SVG-иконка стрелки в формате Data URL, чтобы не было внешних зависимостей
const arrowIconSVG = `/public/arrow.svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='7' y1='17' x2='17' y2='7'/%3E%3Cpolyline points='7 7 17 7 17 17'/%3E%3C/svg%3E`;


// Данные для карточек
const categoriesData = [
  {
    title: 'LIFESTYLE SHOES',
    imgSrc: lifestyleShoeURL,
    link: '/category/lifestyle', // Заменено на <a> href
  },
  {
    title: 'BASKETBALL SHOES',
    imgSrc: basketballShoeURL,
    link: '/category/basketball',
  },
  {
    title: 'RUNNING SHOES',
    imgSrc: lifestyleShoeURL,
    link: '/category/running',
  },
    {
    title: 'TRAINING SHOES',
    imgSrc: basketballShoeURL,
    link: '/category/training',
  },
];

export const Categories = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Эта проверка гарантирует, что Swiper загрузился из CDN перед его инициализацией
    if (window.Swiper && swiperRef.current) {
      // Инициализируем Swiper на DOM-элементе
      new window.Swiper(swiperRef.current, {
        // Указываем Swiper, что нужно использовать модуль навигации
        // Он должен быть доступен в глобальном объекте window.Swiper
        modules: [window.Swiper.Navigation],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 24,
        slidesPerView: 2,
        breakpoints: {
          320: {
            slidesPerView: 1.15,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        },
      });
    }
  }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз после монтажа

  return (
    <>

      <div className="app-container">
        <section className="categories-section">
          <div className="categories-header">
            <h2 className="categories-title">CATEGORIES</h2>
            <div className="categories-nav">
              {/* Эти div'ы используются Swiper'ом для навигации */}
              <div className="swiper-button-prev custom-nav-btn"></div>
              <div className="swiper-button-next custom-nav-btn"></div>
            </div>
          </div>

          {/* HTML-структура для Swiper */}
          <div className="swiper categories-swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {categoriesData.map((category, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="category-card">
                    <img
                      src={category.imgSrc}
                      alt={category.title}
                      className="category-image"
                    />
                    <div className="category-info">
                      <h3>{category.title}</h3>
                      {/* Используем обычный тег <a> вместо <Link> */}
                      <a href={category.link} className="category-link-btn">
                        <img src={arrowIconSVG} alt={`Go to ${category.title}`} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

