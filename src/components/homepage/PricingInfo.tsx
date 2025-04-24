import clsx from "clsx";

type TPricingInfoProps = {
  cn?: string;
};

const PricingInfo = ({ cn }: TPricingInfoProps) => {
  return (
    <div
      className={clsx(
        "mb-10 p-10 flex flex-col md:flex-row bg-white border border-primary-grey-50 justify-between mx-6 max-w-7xl md:mx-auto md:w-full",
        cn
      )}
    >
      <div className="min-w-1/2">
        <p className="display-48-regular">Wyceń Twój taras</p>
        <p className="mt-4">
          Skorzystaj z naszego konfiguratora, aby wycenić Twój taras.
          <br className="hidden md:inline" /> Konfigurator jest dostępny po
          zalogowaniu.
        </p>
        <button className="cursor-pointer hidden md:block text-white font-semibold bg-primary-600 px-4 py-3 mt-6">
          Wyceń i zamów
        </button>
      </div>

      <div className="min-w-1/2 mt-10 md:mt-0 md:pl-10">
        <p className="headline-24-regular">Jak to działa?</p>
        <p className="mt-6">
          1. Kliknij przycisk
          <span className="font-semibold"> “Wyceń i zamów”.</span>
        </p>
        <p className="mt-4">
          2. <span className="font-semibold">Zarejestruj się lub zaloguj </span>
          na swoje konto.
        </p>
        <p className="mt-4">
          3.<span className="font-semibold"> Podaj wymiary </span>
          tarasu i wybierz <span className="font-semibold">rodzaj deski.</span>
        </p>
        <p className="mt-4">
          4. Gotowe!
          <span className="font-semibold"> Skontaktuj się z nami, </span>
          aby złożyć zamówienie.
        </p>

        <button className="cursor-pointer md:hidden w-full text-white font-semibold bg-primary-600 px-4 py-3 mt-10">
          Wyceń i zamów
        </button>
      </div>
    </div>
  );
};

export default PricingInfo;
