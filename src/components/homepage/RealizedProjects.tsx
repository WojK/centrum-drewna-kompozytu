"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperPrevBtn from "./SwiperPrevBtn";
import SwiperNextBtn from "./SwiperNextBtn";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

const products = [
  {
    img: "/img/realized_projects/1.webp",
    title: "Deska kompozytowa na taras Ultrashield Naturale UH02",
    color: "Kolor Antique",
  },
  {
    img: "/img/realized_projects/2.webp",
    title: "Lamele zewnętrzne Ultrashield UH46",
    color: "Kolor Oak",
  },
  {
    img: "/img/realized_projects/1.webp",
    title: "Deska kompozytowa na taras Ultrashield Naturale UH02",
    color: "Kolor Antique",
  },
];

const RealizedProjects = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="px-6 md:px-10 mt-10 md:mt-20 w-fit mx-auto relative">
      <h2 className="headline-40-regular mb-10">Zrealizowane projekty</h2>
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-3 z-10">
        <SwiperPrevBtn swiperRef={swiperRef} />
      </div>
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-3 z-10">
        <SwiperNextBtn swiperRef={swiperRef} />
      </div>

      <Swiper
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop
        className="max-w-[calc(100vw-48px)] md:max-w-[1248px] !pb-16"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white w-fit">
              <div className="w-[calc(100vw-48px) h-[calc(100vw-48px)] md:w-[604px] md:h-[604px] relative">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="headline-20-regular">{product.title}</p>
                <p className="body-16-light text-basic-dark">{product.color}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RealizedProjects;
