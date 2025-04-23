import { SwiperButtonProps } from "./SwiperNextBtn";
import Image from "next/image";

const SwiperPrevBtn = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="cursor-pointer w-12 h-12 bg-white rounded-[24px] flex justify-center items-center shadow-[0_0_2px_2px_#2828280D]"
    >
      <Image
        src="/svg/arrow_left.svg"
        alt="arrow left"
        width={12}
        height={12}
      />
    </button>
  );
};

export default SwiperPrevBtn;
