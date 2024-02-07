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
                    Elim
                  </button>
                  <button className="rounded-md bg-dark/30 p-1 text-base font-medium leading-relaxed shadow-signUp transition duration-300 hover:bg-dark/50 sm:text-lg sm:leading-relaxed">
                    <Link href={`/dashboard/proyectos/crear/?id=${id}`}>
                      Modificar
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
