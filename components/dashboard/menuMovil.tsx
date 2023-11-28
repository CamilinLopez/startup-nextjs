import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Search, Botones, PrintList } from "./utils";
import { listDashboard, listPrincipal } from "./menu";

export default function MenuMovil() {
  const [isOpen, setIsOpen] = useState(false);

  const openMovileMenu = () => setIsOpen(true);
  const closeMovileMenu = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openMovileMenu}
        aria-label="Movile Menu"
        className="rounded-lg ring-primary focus:ring-2"
      >
        <span
          className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
            isOpen ? " top-[7px] rotate-45" : " "
          }`}
        />
        <span
          className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
            isOpen ? "opacity-0 " : " "
          }`}
        />
        <span
          className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
            isOpen ? " top-[-8px] -rotate-45" : " "
          }`}
        />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMovileMenu} className={"relative z-50"}>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel
              className={
                "fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black"
              }
            >
              <div className="p-6">
                <button
                  onClick={closeMovileMenu}
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border-2 ring-primary focus:ring-2"
                >
                  <XMarkIcon className="h-6" />
                </button>
                <div className="mb-4">
                  <Search />
                </div>
                <div className="mb-4">
                  <Botones />
                </div>
                <div className="mb-4">
                  <PrintList data={listDashboard} />
                </div>
                <div>
                  <PrintList data={listPrincipal} />
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
