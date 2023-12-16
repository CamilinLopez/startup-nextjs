"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Pagination from "./pagination";
import { Blog, PaginationItem } from "@/types/blog";
import AxiosInstance from "@/config/axiosConfig";

let startIndex: number = 0;
let endIndex: number = 1;

const Blog = () => {
  const [projects, setProjects] = useState<Blog[]>();
  const [blogsToSwhow, setBlogsToSwhow] = useState<Blog[]>();

  useEffect(() => {
    AxiosInstance.get("/project")
      .then((data) => {
        const newdata = data.data.map((data) => ({
          id: data.id,
          title: data.nombre,
          paragraph: data.texto,
          image: data.linkimagen,
          link: data.website,
        }));
        setProjects(newdata);
      })
      .catch((err) => console.log(err));
  }, [setProjects]);

  useEffect(() => {
    if (projects && projects.length > 0) {
      setBlogsToSwhow(projects.slice(0, 1));
    }
  },[projects]);

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
    if (endIndex >= projects.length) {
      startIndex = projects.length - 1;
      endIndex = projects.length;
    }
    setBlogsToSwhow(projects.slice(startIndex, endIndex));
  };

  return (
    <section id="blog" className="bg-primary/5 py-5 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nuestros Proyectos"
          paragraph="Ideas que hemos dado vida"
          center
        />
        <div className="items-center justify-center">
          {blogsToSwhow &&
            blogsToSwhow.map((blog) => (
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
