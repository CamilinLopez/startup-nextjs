"use client";

import AxiosInstance from "@/config/axiosConfig";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useState } from "react";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { id, title, image, paragraph, link } = blog;
  const pathname = usePathname();
  const [isdelete, setIsDelete] = useState(false);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();

    const response = await AxiosInstance.delete(`/project?id=${id}`);
    setIsDelete(true);
  };

  if (isdelete) return null;

  return (
    <>
      <div className="relative">
        <div
          className="wow fadeInUp flex flex-col justify-center overflow-hidden rounded-md bg-white shadow-one dark:bg-dark md:flex-row"
          data-wow-delay=".1s"
        >
          <div className="flex flex-col items-start p-5 sm:p-8 md:w-1/2 md:py-2 md:px-6 lg:p-8 xl:py-2 xl:px-5 2xl:p-8">
            <div className="relative mb-2 block h-[420px] w-full">
              <a href={link}>
                <Image src={image} alt="image" fill />
              </a>
            </div>
            <h3 className="mb-2 text-left text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
              <Link href={link}>{title}</Link>
            </h3>
            <p className="border-b border-body-color border-opacity-10 pb-3 text-left text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              {paragraph}
            </p>
            <div>
              {pathname === "/dashboard/proyectos" && (
                <div className="absolute right-10 top-10 flex flex-col gap-y-4">
                  <button
                    onClick={handleClick}
                    className="rounded-md bg-dark/30 p-1 text-base font-medium leading-relaxed shadow-signUp transition duration-300 hover:bg-dark/50 sm:text-lg sm:leading-relaxed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                  <button className="rounded-md bg-dark/30 p-1 text-base font-medium leading-relaxed shadow-signUp transition duration-300 hover:bg-dark/50 sm:text-lg sm:leading-relaxed">
                    <Link href={`/dashboard/proyectos/crear/?id=${id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
