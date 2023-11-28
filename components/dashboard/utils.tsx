import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { List } from "./type";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { deleteCookie } from "cookies-next";
import AxiosInstance from "@/config/axiosConfig";

const handleClick = async () => {
  deleteCookie("token");
  localStorage.removeItem("token");
};

export const Search = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;

    // console.log(search.value);
  };
  return (
    <form onSubmit={onSubmit} className="w-max-[200px] relative w-full">
      <input
        type="text"
        name="search"
        placeholder="Buscar..."
        autoComplete="off"
        className="  dark:placeholder:text-neutral-400 w-full rounded-sm  border border-black border-opacity-20 bg-white px-1 py-1 text-sm transition duration-500 ease-in-out hover:border-gray-400 dark:bg-transparent dark:text-white"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4 text-gray-600" />
      </div>
    </form>
  );
};

export const PrintList = ({ data }: { data: List[] }) => {
  return (
    <div className="flex flex-col">
      {data.map((data: List) => (
        <Link href={data.path} key={data.id} className="my-1">
          <button className="text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
            {data.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export const Modal = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
      <div className="flex w-52 flex-col rounded-md bg-white">
        <div className="w-full">
          <span
            onClick={closeModal}
            className="float-right mb-2 cursor-pointer px-2 text-xl text-gray-500 hover:text-gray-700"
          >
            &times;
          </span>
        </div>
        <div className="mx-3 mb-2 flex flex-col text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
          <Link onClick={closeModal} href="/dashboard/proyectos/crear">
            Proyecto
          </Link>
          <Link onClick={closeModal} href="/dashboard/pricing/crear">
            Pricing
          </Link>
          <Link onClick={closeModal} href="/dashboard/stack/crear">
            Stack
          </Link>
          <Link onClick={closeModal} href="/dashboard/faq/crear">
            FAQ
          </Link>
        </div>
        <div className="my-2 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="rounded-md bg-primary/70 p-2 text-base font-medium  leading-relaxed transition-all duration-300 hover:bg-primary sm:text-lg sm:leading-relaxed "
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export const Botones = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex w-full space-x-2 border bg-primary/30 transition duration-300 hover:bg-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
        <button
          onClick={openModal}
          className="text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed"
        >
          Crear
        </button>
        {isOpen && <Modal closeModal={() => setIsOpen(false)} />}
      </div>
      <div className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        <button className="text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
          Actualizar
        </button>
      </div>
      <div className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <button
          onClick={handleClick}
          className="text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed"
        >
          <Link href={"/"}>Salir</Link>
        </button>
      </div>
    </>
  );
};

const dots = "mx-[1px] inline-block h-1 w-1 animate-blink rounded-md";

export const LoadingDots = ({ className }: { className: string }) => {
  return (
    <span className="mx-2 inline-flex items-center">
      <span className={clsx(dots, className)} />
      <span
        className={clsx(
          dots,
          "transition-delay-200 animate-pulse-custom",
          className
        )}
      />
      <span
        className={clsx(
          dots,
          "transition-delay-400 animate-pulse-custom",
          className
        )}
      />
    </span>
  );
};
