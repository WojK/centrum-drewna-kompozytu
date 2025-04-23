import { EMAIL, FACEBOOK_LINK, INSTAGRAM_LINK, PHONE } from "@/consts";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={clsx(
        "w-full sticky top-0 z-50 md:hidden flex flex-col",
        isOpen && "h-screen"
      )}
    >
      <div className="bg-white border border-tertiary-100 pl-6 pr-7 py-2 flex justify-between items-center">
        <Image src="/img/logo.webp" alt="logo" width={40} height={53} />
        {!isOpen && (
          <button className="cursor-pointer" onClick={handleOpenMenu}>
            <Image src="/svg/menu.svg" alt="open-menu" width={30} height={30} />
          </button>
        )}
        {isOpen && (
          <button className="cursor-pointer" onClick={handleCloseMenu}>
            <Image
              src="/svg/close.svg"
              alt="close-menu"
              width={21}
              height={21}
            />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="grow min-h-fit px-6 pt-6 flex flex-col bg-white overflow-y-auto pb-[100px]">
          <ul className="flex gap-y-6 flex-col headline-20-regular border-b border-tertiary-200 pb-10">
            {[
              "Tarasy",
              "Elewacje",
              "Ogrodzenia",
              "Akcesoria",
              "Aktualności",
              "Kontakt",
            ].map((item) => (
              <li key={item} className="">
                <Link href={"#"}>{item}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center mt-10">
            <Link href={FACEBOOK_LINK} target="_blank">
              <Image
                src="/svg/fb_grey.svg"
                alt="facebook"
                width={24}
                height={24}
                className="mr-6"
              />
            </Link>
            <Link href={INSTAGRAM_LINK} target="_blank">
              <Image
                src="/svg/ig_grey.svg"
                alt="instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href={`tel:${PHONE.replace(/\s+/g, "")}`}
              className="body-16-semibold text-tertiary-300 ml-4"
            >
              {PHONE}
            </Link>
          </div>
          <Link
            href={`mailto:${EMAIL}`}
            className="body-16-semibold text-tertiary-300 mt-4 block"
          >
            {EMAIL}
          </Link>
          <button className="cursor-pointer mt-10 w-full text-tertiary-700 bg-white px-5 py-4 subtitle-16-semibold border border-primary-600">
            Zarejestruj się
          </button>
          <button className="cursor-pointer w-full text-white bg-primary-600 px-5 py-4 mt-4 subtitle-16-semibold">
            Zaloguj się
          </button>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
