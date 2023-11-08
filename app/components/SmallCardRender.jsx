"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SmallCardProduct from "./SmallCardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { useUserContext } from "../contexts/userContext";
import React, { useEffect, useState } from "react";
import SlideNavButtons from "./paginationCarrucel";
import Link from "next/link";
const SmallCardRender = () => {
  const userToken = useUserContext();

  const [info, setInfo] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8081/posts");
        const dataApi = await response.json();
        setInfo(dataApi);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    })();
  }, []);
  if (info.length === 0) {
    return <span>loading.....</span>;
  }

  const { success, products } = info;

  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {products.product.map((item) => (
          <SwiperSlide key={item.id}>
            <SmallCardProduct
              key={item.id}
              id={item._id}
              title={item.name}
              price={item.price}
              description={item.description}
              // img={item.image}
            />
          </SwiperSlide>
        ))}
        <SlideNavButtons />
      </Swiper>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        className="mt-10"
      >
        {products.product.map((item) => (
          <SwiperSlide key={item.id}>
            <SmallCardProduct
              key={item.id}
              id={item._id}
              title={item.name}
              price={item.price}
              description={item.description}
              // img={item.image}
            />
          </SwiperSlide>
        ))}

        <SlideNavButtons />
      </Swiper>
    </>
  );
};

export default SmallCardRender;
