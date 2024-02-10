"use client";

import AxiosInstance from "@/config/axiosConfig";
import { Suspense, useEffect, useState } from "react";
import { Project } from "./crear/page";
import SingleBlog from "@/components/Blog/SingleBlog";
import { Blog } from "@/types/blog";

type Error = {
  bool: boolean;
  message: string;
};

export default function Proyectos() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    AxiosInstance.get("/project")
      .then((data) => {
        if (data.data) {
          setData(data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError({
          ...error,
          bool: true,
          message: err.response.data,
        });
      });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full h-screen overflow-y-auto">
        {!loading && !error ? (
          <div className="flex flex-col gap-4 p-6">
            {data?.map((project) => (
              <div
                className="overflow-y-auto rounded-xl shadow-signUp w-full"
                key={project.id}
              >
                <SingleBlog
                  key={project.id}
                  blog={{
                    id: project.id,
                    title: project.nombre,
                    image: project.linkimagen,
                    paragraph: project.texto,
                    link: project.website,
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            {error ? (
              <div>
                <h3 className="text-xl font-bold">{error.message}</h3>
              </div>
            ) : (
              <div>Loading</div>
            )}
          </div>
        )}
      </div>
    </Suspense>
  );
}
