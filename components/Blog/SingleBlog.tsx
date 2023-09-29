import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, link } = blog;
  return (
    <>
      <div
        className="justify-center wow fadeInUp overflow-hidden rounded-md bg-white shadow-one dark:bg-dark flex flex-col md:flex-row"
        data-wow-delay=".1s"
      >
        <div className="md:w-1/2 p-5 sm:p-8 md:py-2 md:px-6 lg:p-8 xl:py-2 xl:px-5 2xl:p-8 flex flex-col items-start">
          <div className="relative block w-full h-[420px] mb-2">
            <a href={link}>
              <Image src={image} alt="image" fill />
            </a>
          </div>
          <h3 className="mb-2 text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl text-left">
            <Link href={link}>{title}</Link>
          </h3>
          <p className="border-b border-body-color border-opacity-10 pb-3 text-base font-medium text-body-color dark:border-white dark:border-opacity-10 text-left">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
