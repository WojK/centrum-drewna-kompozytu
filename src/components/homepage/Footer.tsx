import { EMAIL, FACEBOOK_LINK, INSTAGRAM_LINK, PHONE } from "@/consts";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-10 md:px-12 py-10">
      <div className="flex flex-col w-fit mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-center">
          <div>
            <Image src="/img/logo.webp" alt="logo" width={80} height={108} />
          </div>
          <div className="pb-6 md:pb-0 mt-6 md:mt-0 md:ml-20 border-b md:border-b-0 md:border-r border-tertiary-200 pr-32">
            <h2 className="headline-20-regular">Skontaktuj się z nami</h2>
            <span className="text-tertiary-400 block mt-4 md:mt-6 button-12-regular">
              Email
            </span>
            <Link
              href={`mailto:${EMAIL}`}
              className="body-14-regular block mt-1"
            >
              {EMAIL}
            </Link>
            <span className="text-tertiary-400 block mt-4 button-12-regular">
              Telefon
            </span>
            <Link
              href={`tel:${PHONE.replace(/\s+/g, "")}`}
              className="body-14-regular block mt-1"
            >
              {PHONE}
            </Link>
            <div className="flex gap-x-2 mt-4">
              <Link href={FACEBOOK_LINK} target="_blank">
                <Image
                  src="/svg/fb_dark.svg"
                  alt="facebook icon"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={INSTAGRAM_LINK} target="_blank">
                <Image
                  src="/svg/ig_dark.svg"
                  alt="instagram icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="pb-6 md:pb-0 pt-6 md:pt-0 flex flex-col gap-y-4 md:pl-32 border-b md:border-b-0 md:border-r border-tertiary-200 md:pr-32">
            {[
              "Oferta",
              "Wycena indywidualna",
              "Rejestracja gwarancyjna",
              "Realizacje",
              "Formularz kontaktowy",
              "Newsletter",
            ].map((i) => {
              return (
                <Link
                  key={i}
                  className="body-14-regular text-nowrap"
                  href={"#"}
                >
                  {i}
                </Link>
              );
            })}
          </div>
          <div className="md:pl-32 pt-6 md:pt-0">
            <h2 className="headline-20-regular">Subskrypuj newsletter</h2>
            <span className="mt-4 body-14-regular inline-block">
              Bądź na bieżąco z nowościami i promocjami.
            </span>
            <button className="cursor-pointer text-primary-600 subtitle-16-semibold px-4 py-3.5 bg-white mt-6 border block">
              Subskrybuj
            </button>
          </div>
        </div>
        <span className="text-tertiary-400 body-14-regular mt-10">
          Copyright@ 2025 Kompozyt i Drewno wsparcie adito.pl
        </span>
      </div>
    </footer>
  );
};

export default Footer;
