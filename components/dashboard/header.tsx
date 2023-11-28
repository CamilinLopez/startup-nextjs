"use client";

import Image from "next/image";
import Link from "next/link";
import MenuMovil from "./menuMovil";

export default function HeaderDashboard() {
  return (
    <header className="header relative flex h-20 w-full items-center border-b-2 bg-transparent">
      <div className="mx-6 flex w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo/newlogo/logor.svg"
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
        <div className="lg:hidden">
          <MenuMovil />
        </div>
      </div>
    </header>
  );
}
