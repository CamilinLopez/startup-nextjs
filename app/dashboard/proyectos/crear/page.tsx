"use client";

import { LoadingDots } from "@/components/dashboard/utils";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState, ChangeEvent, Suspense, useEffect } from "react";
import { MouseEvent } from "react";
import AxiosInstance from "@/config/axiosConfig";
import { useSearchParams } from "next/navigation";

export type Project = {
  id?: string;
  imagen: File | null;
  nombre: string;
  texto: string;
  website: string;
};

type Message = {
  message: string;
  color: string;
};

export default function CrearProyecto() {
  const router = useSearchParams();
  const id = router.get("id");

  const [imageURL, setImageURL] = useState<string | null>(null);
  const [isPending, setPending] = useState<boolean>(true);
  const [project, setProject] = useState<Project | null>(null);
  const [message, setMessage] = useState<Message>({
    message: "",
    color: "#FFFFFF",
  });
  const [createModify, setCreateModify] = useState<string>("Crear");
  const [getProject, setGetProject] = useState({
    id: "",
    nombre: "",
    texto: "",
    linkimagen: "",
    website: "",
  });

  useEffect(() => {
    if (id) {
      setCreateModify("Modificar");
      AxiosInstance.get(`/project?id=${id}`)
        .then((data) => {
          setGetProject(data.data);
        })
        .catch((error) => {
          setMessage({
            message: error.response.data,
            color: "text-red",
          });
        });
    } else {
      setCreateModify("Crear");
      setGetProject({
        id: "",
        nombre: "",
        texto: "",
        linkimagen: "",
        website: "",
      });
    }
  }, [id]);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onload = async () => {
      if (typeof reader.result === "string") {
        setProject({
          ...project,
          [e.target.name]: reader.result,
        });
        setImageURL(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const createProyect = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (createModify === "Modificar") {
      setPending(false);
      try {
        const response = await AxiosInstance.put("/project", {
          id,
          newdata: project,
        });
        if (response.data) {
          setMessage({
            message: response.data,
            color: "text-green",
          });
        }
      } catch (error) {
        setMessage({
          message: error.response.data,
          color: "text-red",
        });
      }
      setPending(true);
    }

    if (createModify === "Crear") {
      setPending(false);
      try {
        const response = await AxiosInstance.post("/project", project);
        if (response.data)
          setMessage({
            message: response.data,
            color: "text-green",
          });
      } catch (error) {
        setMessage({
          message: error.response.data,
          color: "text-red",
        });
      }
      setPending(true);
    }
  };

  return (
    <Suspense fallback={<div>Loading..</div>}>
      <div className="flex h-full w-full px-5 lg:px-24">
        <div className="flex w-full flex-col items-center lg:items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold">{createModify}</h3>
              <p className="text-xs font-medium ">
                Agrega un nuevo proyecto a tu portfolio
              </p>
            </div>
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-20">
              <div className="mx-auto max-w-md overflow-hidden rounded shadow-lg">
                <label
                  htmlFor="upload"
                  className="relative block h-64 cursor-pointer bg-gray-200 hover:bg-gray-300"
                >
                  <input
                    id="upload"
                    type="file"
                    name="imagen"
                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    onChange={handleImageUpload}
                  />
                  {imageURL || getProject.linkimagen ? (
                    <img
                      src={imageURL || getProject.linkimagen}
                      alt="Uploaded"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <svg
                        className="h-12 w-12 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  )}
                </label>
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">Subir imagen</div>
                  <p className="text-base text-gray-700">
                    Haz clic o arrastra y suelta una imagen aquí.
                  </p>
                </div>
              </div>
              <form className="flex w-auto flex-col space-y-6 lg:w-80">
                <input
                  className="rounded-sm border border-black border-opacity-20"
                  type="textarea"
                  name="nombre"
                  onChange={handleOnChange}
                  placeholder={
                    getProject.nombre ? getProject.nombre : "Titulo..."
                  }
                />
                <textarea
                  className="rounded-sm border border-black border-opacity-20"
                  name="texto"
                  onChange={handleOnChange}
                  placeholder={
                    getProject.texto ? getProject.texto : "Descripcion..."
                  }
                />
                <input
                  className="rounded-sm border border-black border-opacity-20"
                  type="text"
                  name="website"
                  onChange={handleOnChange}
                  placeholder={
                    getProject.website ? getProject.website : "Website..."
                  }
                />
                <div>
                  <button
                    className="relative flex w-full items-center justify-center rounded-md border bg-primary p-2 text-base font-bold transition duration-300 hover:bg-primary/80"
                    onClick={createProyect}
                    name="hola"
                  >
                    <div className="absolute left-0 ml-4">
                      {isPending ? (
                        <PlusIcon className="h-5 text-white" />
                      ) : (
                        <LoadingDots className="mb-3 bg-white" />
                      )}
                    </div>
                    <span className="text-white">{createModify}</span>
                  </button>
                  <p className={`font-mono ${message.color}`}>
                    {message.message}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
