type TChipProps = {
  text: string;
};

const Chip = ({ text }: TChipProps) => {
  return (
    <span className="button-12-medium border border-primary-600 py-2 px-4 w-fit rounded-[46px]">
      {text}
    </span>
  );
};

export default Chip;
