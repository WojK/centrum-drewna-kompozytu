import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-12 py-10">
      <div className="flex flex-col w-fit mx-auto">
        <div className="flex justify-center">
          <div>
            <Image src="/img/logo.png" alt="logo" width={80} height={108} />
          </div>
          <div className="ml-20 border-r border-Tertiary-200 pr-[135px]">
            <h2 className="headline-20-regular">Skontaktuj się z nami</h2>
            <span className="text-Tertiary-400 block mt-6 button-12-regular">
              Email
            </span>
            <span className="body-14-regular block mt-1">
              kid@kompozytidrewno.pl
            </span>
            <span className="text-Tertiary-400 block mt-4 button-12-regular">
              Telefon
            </span>
            <span className="body-14-regular block mt-1">+48 735 745 742</span>
            <div className="flex gap-x-2 mt-4">
              <Image
                src="/svg/fb_dark.svg"
                alt="facebook icon"
                width={20}
                height={20}
              />
              <Image
                src="/svg/ig_dark.svg"
                alt="instagram icon"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 pl-[135px] border-r border-Tertiary-200 pr-[135px]">
            {[
              "Oferta",
              "Wycena indywidualna",
              "Rejestracja gwarancyjna",
              "Realizacje",
              "Formularz kontaktowy",
              "Newsletter",
            ].map((i) => {
              return (
                <span key={i} className="body-14-regular text-nowrap">
                  {i}
                </span>
              );
            })}
          </div>
          <div className="pl-[135px]">
            <h2 className="headline-20-regular">Subskrypuj newsletter</h2>
            <span className="mt-4 body-14-regular inline-block">
              Bądź na bieżąco z nowościami i promocjami.
            </span>
            <button className="text-primary-green-600 subtitle-16-semibold px-4 py-[13px] bg-white mt-6 border block">
              Subskrybuj
            </button>
          </div>
        </div>
        <span className="text-Tertiary-400 body-14-regular mt-10">
          Copyright@ 2025 Kompozyt i Drewno wsparcie adito.pl
        </span>
      </div>
    </footer>
  );
};

export default Footer;
