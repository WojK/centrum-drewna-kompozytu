const RegisterPlanks = () => {
  return (
    <div className="py-12 md:py-20 px-12 md:px-24 bg-primary-green-600 text-white mt-12 md:mt-20 flex flex-col md:flex-row justify-between">
      <div>
        <h2 className="headline-40-regular">
          Zadbaj o pełną ochronę swojej inwestycji
        </h2>
        <p className="headline-18-regular mt-6">
          Dajemy Ci możliwość dodatkowej rejestracji gwarancyjnej Twoich
          produktów. Ciesz się <br className="hidden md:inline" /> naszymi
          produktami z jeszcze większym spokojem.
        </p>
      </div>
      <div className="mt-10 md:mt-0">
        <button className="w-full text-primary-green-600 subtitle-16-semibold px-5 py-[17px] bg-white">
          Zarejestruj deski
        </button>
      </div>
    </div>
  );
};

export default RegisterPlanks;
