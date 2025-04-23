const HeroContent = () => {
  return (
    <div className="text-white relative px-6 py-24 mx-auto md:pt-[172px] max-w-7xl">
      <p className="uppercase overline-16-regular md:overline-20-regular">
        KOMPOZYT I DREWNO
      </p>
      <p className="mt-2 display-48-regular md:display-88-regular">
        Subtelne dla oka,
        <br className="hidden md:inline" /> silne w konstrukcji
      </p>
      <p className="mt-10 headline-20-light md:headline-24-light  md:w-[480px]">
        Od 13 lat tworzymy rozwiązania, które łączą trwałość, estetykę i
        nowoczesne rozwiązania.
      </p>
      <button className="cursor-pointer text-tertiary-700 bg-white px-5 py-4 mt-10 subtitle-16-semibold">
        Zarejestruj się
      </button>
    </div>
  );
};

export default HeroContent;
