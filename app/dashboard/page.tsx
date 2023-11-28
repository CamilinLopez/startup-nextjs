"use client";
import { useEffect } from "react";
import { getCookie } from "cookies-next";

export default function Dashboard() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = getCookie("token");
      localStorage.setItem("token", token);
    }
  });

  return (
    <>
      <section id="dashboard" className="">
        hola
      </section>
    </>
  );
}
