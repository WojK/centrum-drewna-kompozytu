import clsx from "clsx";
import Image from "next/image";
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
      <div className="bg-white border border-Tertiary-100 pl-6 pr-7 py-2 flex justify-between items-center">
        <Image src="/img/logo.png" alt="logo" width={40} height={53} />
        {!isOpen && (
          <button className="" onClick={handleOpenMenu}>
            <Image src="/svg/menu.svg" alt="open-menu" width={30} height={30} />
          </button>
        )}
        {isOpen && (
          <button className="" onClick={handleCloseMenu}>
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
        <div className="grow p-6 flex flex-col bg-white overflow-y-auto">
          <ul className="flex gap-y-6 flex-col headline-20-regular border-b border-Tertiary-200 pb-10">
            {[
              "Tarasy",
              "Elewacje",
              "Ogrodzenia",
              "Akcesoria",
              "Aktualności",
              "Kontakt",
            ].map((item) => (
              <li key={item} className="">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center mt-10">
            <Image
              src="/svg/fb_grey.svg"
              alt="facebook"
              width={24}
              height={24}
              className="mr-6"
            />
            <Image
              src="/svg/ig_grey.svg"
              alt="instagram"
              width={24}
              height={24}
            />
            <span className="body-16-semibold text-Tertiary-300 ml-4">
              +48 735 745 742
            </span>
          </div>
          <span className="body-16-semibold text-Tertiary-300 mt-4 block">
            kid@kompozytidrewno.pl
          </span>
          <button className="mt-10 w-full text-Tertiary-700 bg-white px-5 py-4 subtitle-16-semibold border border-primary-green-600">
            Zarejestruj się
          </button>
          <button className="w-full text-white bg-primary-green-600 px-5 py-4 mt-4 subtitle-16-semibold">
            Zaloguj się
          </button>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
