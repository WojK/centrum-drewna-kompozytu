import clsx from "clsx";

type TCardProps = {
  title: string;
  text: string;
  imgPath: string;
  cn?: string;
};

const HoverCard = ({ title, text, imgPath, cn }: TCardProps) => {
  return (
    <div className={clsx(cn)}>
      <span className="mb-5 text-[32px]">{title}</span>
      <div className="relative w-full max-w-[328px] h-[437px] overflow-hidden group">
        {/* Image */}
        <img
          src={imgPath}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-Tertiary-100/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-center justify-center text-gray-800">
          <p className="text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
