"use client";
import { useSearchParams } from "next/navigation";
import { setCookie } from "cookies-next";

export default function Dashboard() {
  const params = useSearchParams();
  setCookie("userid", params.get("id"));
  return (
    <>
      <section id="dashboard" className="">
        inicio
      </section>
    </>
  );
}
