import clsx from "clsx";

type TPricingInfoProps = {
  cn?: string;
};

const PricingInfo = ({ cn }: TPricingInfoProps) => {
  return (
    <div
      className={clsx(
        "p-10 flex bg-white border border-primary-grey-50 mx-24 justify-between",
        cn
      )}
    >
      <div className="w-[536px]">
        <p className="text-[48px]">Wyceń Twój taras</p>
        <p className="mt-4">
          Skorzystaj z naszego konfiguratora, aby wycenić Twój taras.
        </p>
        <p> Konfigurator jest dostępny po zalogowaniu.</p>
        <button className="text-white font-semibold bg-primary-green-600 px-4 py-3 mt-6">
          Wyceń i zamów
        </button>
      </div>

      <div className="w-[536px]">
        <p className="text-[24px]">Jak to działa?</p>
        <p className="mt-6">
          1. Kliknij przycisk
          <span className="font-semibold"> “Wyceń i zamów”.</span>
        </p>
        <p className="mt-4">
          <span className="font-semibold">2. Zarejestruj się lub zaloguj </span>
          na swoje konto.
        </p>
        <p className="mt-4">
          <span className="font-semibold">3. Podaj wymiary </span>
          tarasu i wybierz <span className="font-semibold">rodzaj deski.</span>
        </p>
        <p className="mt-4">
          4. Gotowe!
          <span className="font-semibold"> Skontaktuj się z nami, </span>
          aby złożyć zamówienie.
        </p>
      </div>
    </div>
  );
};

export default PricingInfo;
