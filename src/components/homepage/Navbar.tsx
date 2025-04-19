"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactBar from "./ContactBar";

const Navbar = () => {
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
        scrolled
          ? "bg-white text-basic-dark shadow-md py-4"
          : "bg-transparent text-white"
      )}
    >
      {/* <ContactBar isLoggedIn={true} /> */}

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
          <div className="flex items-center border border-white px-2.5 bg-transparent text-white max-w-md w-[320px] py-3">
            <Image
              src="/svg/search.svg"
              alt="search icon"
              width={17}
              height={17}
            />
            <input
              type="text"
              placeholder="Szukaj"
              className="ml-2.5 bg-transparent outline-none text-white placeholder-white w-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
