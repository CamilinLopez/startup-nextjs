"use client";
import { useEffect } from "react";
import { getCookie } from "cookies-next";

export default function Dashboard() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = getCookie("token");
      const id = getCookie("id");
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
    }
  });

  return (
    <>
      <section id="dashboard" className="">
        inicio
      </section>
    </>
  );
}
