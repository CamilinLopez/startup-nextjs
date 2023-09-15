"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Pagination from "./pagination";
import { Blog, PaginationItem } from "@/types/blog";

let startIndex: number = 0;
let endIndex: number = 1;

const Blog = () => {
  const [blogsToSwhow, setBlogsToSwhow] = useState<Blog[]>(
    blogData.slice(0, 1)
  );

  const blogsPerPage = (pag: { item: PaginationItem }) => {
    if (pag.item === "Prev") {
      if (startIndex !== 0 && endIndex !== 1) {
        endIndex--;
        startIndex--;
      }
    }

    if (pag.item === "Next") {
      if (startIndex !== 9 && endIndex !== 10) {
        endIndex++;
        startIndex++;
      }
    }
    if (pag.item !== "Next" && pag.item !== "Prev" && pag.item !== "...") {
      endIndex = parseInt(pag.item);
      startIndex = endIndex - 1;
    }
    setBlogsToSwhow(blogData.slice(startIndex, endIndex));
  };

  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nuestros Proyectos"
          paragraph="Ideas que hemos dado vida"
          center
        />
        <div className="justify-center items-center">
          {blogsToSwhow.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
        <div>
          <Pagination blogsPerPage={blogsPerPage} />
        </div>
      </div>
    </section>
  );
};

export default Blog;
