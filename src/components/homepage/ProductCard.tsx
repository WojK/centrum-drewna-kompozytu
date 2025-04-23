import Chip from "../common/Chip";
import Image from "next/image";

type TProductCardProps = {
  type: string;
  imgSrc: string;
  name: string;
  price: string;
  priceType: string;
};

const ProductCard = ({
  type,
  imgSrc,
  name,
  price,
  priceType,
}: TProductCardProps) => {
  return (
    <div className="mx-auto flex flex-col p-6 w-[294px] bg-white h-[466px] relative transition-shadow duration-300 hover:shadow-[0px_0px_8px_8px_#28282826]">
      <div className="relative h-[246px] w-[246px]">
        <div className="absolute top-0 left-0 z-10">
          <Chip text={type} />
        </div>
        <Image src={imgSrc} alt={name} fill className="object-cover" />
      </div>

      <span className="text-[20px] leading-[32px] inline-block mt-4">
        {name}
      </span>
      <span className="font-bold">
        {price} {priceType}
      </span>

      <button className="cursor-pointer absolute bottom-4 text-primary-600 py-4 font-semibold border border-primary-600 left-1/2 -translate-x-1/2 w-[246px]">
        Zobacz szczegóły
      </button>
    </div>
  );
};

export default ProductCard;
