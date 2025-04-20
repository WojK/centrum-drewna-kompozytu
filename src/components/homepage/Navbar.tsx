"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

type TNavbarProps = {
  showedContactBar: boolean;
};

const Navbar = ({ showedContactBar }: TNavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-20",
        showedContactBar && scrolled && "top-[32px]",
        scrolled
          ? "bg-white text-basic-dark shadow-md py-4"
          : "bg-transparent text-white"
      )}
    >
      <div
        className={clsx(
          "flex px-10 items-center justify-between",
          !scrolled && "pt-6"
        )}
      >
        <div className="flex items-center">
          {!scrolled ? (
            <Image src="/img/logo.png" alt="logo" width={80} height={108} />
          ) : (
            <Image src="/img/logo.png" alt="logo" width={48} height={64} />
          )}

          <ul className="flex gap-x-12 ml-12 text-[18px] leading-[32px] font-normal">
            {[
              "Tarasy",
              "Elewacje",
              "Ogrodzenia",
              "Akcesoria",
              "Aktualności",
              "Kontakt",
            ].map((item) => (
              <li key={item} className="relative cursor-pointer group">
                <span className="after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            className={clsx(
              "flex items-center border  px-2.5 bg-transparent max-w-md w-[320px] py-3",
              scrolled ? "border-basic-dark" : "border-white"
            )}
          >
            {scrolled ? (
              <Image
                src="/svg/search_dark.svg"
                alt="search icon"
                width={17}
                height={17}
              />
            ) : (
              <Image
                src="/svg/search.svg"
                alt="search icon"
                width={17}
                height={17}
              />
            )}
            <input
              type="text"
              placeholder="Szukaj"
              className={clsx(
                "ml-2.5 bg-transparent outline-none w-full",
                scrolled
                  ? "text-basic-dark placeholder-basic-dark"
                  : "text-white placeholder-white"
              )}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
