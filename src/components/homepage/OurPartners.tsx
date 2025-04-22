import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import SwiperPrevBtn from "./SwiperPrevBtn";
import SwiperNextBtn from "./SwiperNextBtn";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";

const parteners = [
  {
    logo: "/img/partners/bruggan_logo.jpeg",
    material: "/img/partners/bruggan.jpeg",
  },
  {
    logo: "/img/partners/maximus_logo.png",
    material: "/img/partners/maximus.jpeg",
  },
  {
    logo: "/img/partners/ultrashield_logo.jpeg",
    material: "/img/partners/ultrashield.jpeg",
  },
  {
    logo: "/img/partners/advance_logo.png",
    material: "/img/partners/advance.jpeg",
  },
  {
    logo: "/img/partners/legro_logo.png",
    material: "/img/partners/legro.jpeg",
  },
  {
    logo: "/img/partners/bruggan_logo.jpeg",
    material: "/img/partners/bruggan.jpeg",
  },
];

const OurPartners = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="mt-12 md:mt-20 max-w-screen overflow-x-clip md:w-[1248px] mx-auto pl-6 md:pl-0">
      <h2 className="headline-40-regular mb-10">Nasi partnerzy</h2>

      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:block">
          <SwiperPrevBtn swiperRef={swiperRef} />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:block">
          <SwiperNextBtn swiperRef={swiperRef} />{" "}
        </div>
        <Swiper
          onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={2}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="max-w-[1104px] !pb-16"
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {parteners.map((partner, index) => (
            <SwiperSlide key={index} className="swiper-partner">
              <div className="swiper-slide-partner transition-shadow duration-300 p-6 w-fit">
                <div className="w-fit flex flex-col items-center">
                  <div className="w-[96px] h-[96px] relative rounded-full overflow-clip">
                    <Image
                      src={partner.material}
                      alt={partner.material}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-[140px] h-[56px] relative mt-4">
                    <Image
                      src={partner.logo}
                      alt={partner.logo}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartners;
