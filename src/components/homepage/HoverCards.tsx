import HoverCard from "@/components/common/HoverCard";
import clsx from "clsx";

type TCardsProps = {
  items: { title: string; text: string; imgPath: string }[];
  cn?: string;
};

const HoverCards = ({ items, cn }: TCardsProps) => {
  return (
    <div className={clsx("flex justify-center gap-x-4 flex-wrap gap-y-10", cn)}>
      {items.map((i) => {
        return (
          <HoverCard
            text={i.text}
            title={i.title}
            imgPath={i.imgPath}
            key={i.title}
          />
        );
      })}
    </div>
  );
};

export default HoverCards;
