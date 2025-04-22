import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type TRecommendedProductsProps = {
  products: {
    type: string;
    imgSrc: string;
    name: string;
    price: string;
    priceType: string;
  }[];
};

const RecommendedProducts = ({ products }: TRecommendedProductsProps) => {
  return (
    <div className="mt-20 flex flex-col items-start mx-auto w-fit px-6 md:px-0">
      <h2 className="headline-40-regular mb-10">Polecane produkty</h2>

      {/* Mobile Slider */}
      <div className="md:hidden max-w-[calc(100vw-48px)]">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="!pb-16"
          centeredSlides={true}
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex justify-center gap-x-6">
        {products.map((product, i) => {
          return <ProductCard key={i} {...product} />;
        })}
      </div>
    </div>
  );
};

export default RecommendedProducts;
