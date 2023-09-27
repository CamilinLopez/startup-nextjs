"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

export default function Finish() {
  return (
    <section className="bg-white bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="¿Listo para dar vida"
          paragraph="a tu idea?"
          center
        />
        <div className="flex flex-col justify-center items-center">
          <Link
            href="https://tally.so/embed/wA2MAo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            className="rounded-md bg-primary py-4 px-16 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Unirse
          </Link>
          <div>
            <Image
              src="/images/finish/circles.svg"
              width={600}
              height={600}
              alt="circles"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
