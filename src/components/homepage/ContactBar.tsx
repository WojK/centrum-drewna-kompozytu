"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

type TContacBarProps = {
  isLoggedIn: boolean;
};

const ContactBar = ({ isLoggedIn }: TContacBarProps) => {
  const [showBar, setShowBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show on scroll up, hide on scroll down
      if (currentScrollY < lastScrollY) {
        setShowBar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowBar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={clsx(
        "w-full flex justify-between px-10 py-2 z-20 bg-Tertiary-700 text-Tertiary-100 text-[16px] transform transition-transform duration-300",
        showBar ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex gap-x-4">
        <Image src="/svg/fb.svg" alt="facebook icon" width={20} height={20} />
        <Image src="/svg/ig.svg" alt="instagram icon" width={20} height={20} />
        <span>+48 735 745 742</span>
        <span>kid@kompozytidrewno.pl</span>
      </div>
      <div className="text-white">
        {isLoggedIn && (
          <>
            <span className="pr-4">Zarejestruj się</span>
            <span className="pl-4 border-l border-Tertiary-100 font-semibold">
              Zaloguj się
            </span>
          </>
        )}
        {!isLoggedIn && (
          <>
            <span className="font-semibold">Moje konto</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactBar;
