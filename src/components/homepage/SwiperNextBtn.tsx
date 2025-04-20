import SwiperInstance from "swiper";
import Image from "next/image";

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>;
}

const SwiperNextBtn = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="w-12 h-12 bg-white rounded-[24px] flex justify-center items-center shadow-[0_0_2px_2px_#2828280D]"
    >
      <Image
        src="/svg/arrow_right.svg"
        alt="arrow right"
        width={12}
        height={12}
      />
    </button>
  );
};

export default SwiperNextBtn;
