"use client";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import SmallCardProduct from "./SmallCardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState} from "react";
import SlideNavButtons from "./paginationCarrucel";

const SmallCardRender = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=24"
        );
        const dataApi = await response.json();
        setData(dataApi);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    })();
  }, []);
  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView:1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SmallCardProduct
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              img={item.image}
            />
          </SwiperSlide>
        ))}
        <SlideNavButtons/>
      </Swiper>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView:1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        className="mt-10"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SmallCardProduct
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              img={item.image}
            />
          </SwiperSlide>
        ))}
        <SlideNavButtons/>
      </Swiper>

    </>
  );
};

export default SmallCardRender;
