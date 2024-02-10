import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { List } from "./type";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { deleteCookie, setCookie } from "cookies-next";

export const Search = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
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

export const PrintList = ({
  data,
  closeMovileMenu,
}: {
  data: List[];
  closeMovileMenu?: () => void;
}) => {
  return (
    <div className="flex flex-col">
      {data.map((data: List) => (
        <Link href={data.path} key={data.id} className="my-1">
          <button
            onClick={closeMovileMenu}
            className="text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed"
          >
            {data.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export const Modal = ({ closeModal, closeMovileMenu }) => {
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
          <Link
            onClick={() => {
              closeModal();
              closeMovileMenu();
            }}
            href="/dashboard/proyectos/crear"
          >
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

export const Botones = ({ closeMovileMenu = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const handleClick = () => {
    deleteCookie("token", { domain: ".protolylab.digital", secure: true });
    deleteCookie("isadmin", { domain: ".protolylab.digital", secure: true });
    deleteCookie("userid", { domain: ".protolylab.digital", secure: true });
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
        {isOpen && (
          <Modal
            closeMovileMenu={closeMovileMenu}
            closeModal={() => setIsOpen(false)}
          />
        )}
      </div>
      <div className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>

        <button
          onClick={closeMovileMenu}
          className="text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed"
        >
          <Link href="/dashboard/usuarios"> Usuarios</Link>
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
