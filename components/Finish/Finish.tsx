"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

export default function Finish() {
  return (
    <section className="bg-white bg-primary/[.03]">
      <div className="container">
        <SectionTitle
          title="¿Listo para dar vida"
          paragraph="a tu idea?"
          center
        />
        <div className="flex flex-col justify-center items-center">
          <Link
            href="/contact"
            className="rounded-md bg-primary py-4 px-16 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Unirse
          </Link>

          <svg
            width="631"
            height="176"
            viewBox="0 0 631 176"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              d="M105 174.995C207.097 37.6679 426.265 37.6672 527 175"
              stroke="#959CB1" // Cambia el color de la línea aquí
              strokeWidth="2" // Opcional: puedes especificar el ancho de la línea
            />
            <path
              d="M1 174.991C153.177 -56.998 479.852 -56.999 630 175"
              stroke="#959CB1" // Cambia el color de la línea aquí
              strokeWidth="2" // Opcional: puedes especificar el ancho de la línea
            />
            <path
              d="M220 174.998C266.452 127 366.168 127 412 175"
              stroke="#959CB1" // Cambia el color de la línea aquí
              strokeWidth="2" // Opcional: puedes especificar el ancho de la línea
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
