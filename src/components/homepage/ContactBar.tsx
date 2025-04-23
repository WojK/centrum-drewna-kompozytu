"use client";

import { EMAIL, FACEBOOK_LINK, INSTAGRAM_LINK, PHONE } from "@/consts";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type TContacBarProps = {
  isLoggedIn: boolean;
  showBar: boolean;
};

const ContactBar = ({ isLoggedIn, showBar }: TContacBarProps) => {
  return (
    <div
      className={clsx(
        "hidden sticky top-0 w-full md:flex justify-between px-10 py-2 z-30 bg-tertiary-700 transform transition-transform duration-300",
        showBar ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex gap-x-4 text-tertiary-100 items-center">
        <Link href={FACEBOOK_LINK} target="_blank">
          <Image src="/svg/fb.svg" alt="facebook icon" width={20} height={20} />
        </Link>
        <Link href={INSTAGRAM_LINK} target="_blank">
          <Image
            src="/svg/ig.svg"
            alt="instagram icon"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href={`tel:${PHONE.replace(/\s+/g, "")}`}
          className="body-16-semibold"
        >
          {PHONE}
        </Link>
        <Link href={`mailto:${EMAIL}`} className="body-16-regular">
          {EMAIL}
        </Link>
      </div>
      <div className="text-white">
        {isLoggedIn && (
          <>
            <Link href={"#"} className="pr-4 body-16-regular">
              Zarejestruj się
            </Link>
            <Link
              href={"#"}
              className="subtitle-16-semibold pl-4 border-l border-tertiary-100"
            >
              Zaloguj się
            </Link>
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
