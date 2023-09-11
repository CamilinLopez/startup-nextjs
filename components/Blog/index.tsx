"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Pagination from "./pagination";
let startIndex = 0,
  endIndex = 1;

const Blog = () => {
  const [blogsToSwhow, setBlogsToSwhow] = useState(blogData.slice(0, 1));

  const blogsPerPage = (pag) => {
    if (pag.item === "Prev") {
      if (startIndex !== 0 && endIndex !== 1) {
        endIndex--;
        startIndex--;
      }
    }

    if (pag.item === "Next") {
      if (startIndex !== 9 && endIndex !== 10) {
        console.log("hola");
        endIndex++;
        startIndex++;
      }
    }
    console.log(startIndex, endIndex);
    setBlogsToSwhow(blogData.slice(startIndex, endIndex));
  };

  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Projects"
          paragraph="Ideas we've brought to life"
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-2 lg:gap-x-6">
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
