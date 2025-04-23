import clsx from "clsx";
import Image from "next/image";

type TCardProps = {
  title: string;
  text: string;
  imgPath: string;
  cn?: string;
};

const HoverCard = ({ title, text, imgPath, cn }: TCardProps) => {
  return (
    <div className={clsx(cn)}>
      <span className="mb-5 headline-32-regular">{title}</span>
      <div className="relative w-[328px] h-[438px] overflow-hidden group mt-5 md:mt-0">
        {/* Image */}
        <Image
          fill
          alt=""
          src={imgPath}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-tertiary-100/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-center justify-center text-gray-800">
          <p className="text-sm leading-relaxed">{text}</p>
        </div>
      </div>

      <button className="cursor-pointer md:hidden text-primary-600 border border-primary-600 subtitle-16-semibold py-3.5 bg-white w-full mt-6">
        Zobacz więcej
      </button>
    </div>
  );
};

export default HoverCard;
