type TChipProps = {
  text: string;
};

const Chip = ({ text }: TChipProps) => {
  return (
    <span className="font-medium text-[12px] font-Inter border border-primary-green-600 py-2 px-4 w-fit rounded-[46px]">
      {text}
    </span>
  );
};

export default Chip;
