"use client";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const params = useSearchParams();
  console.log(params.get("id"));
  return (
    <>
      <section id="dashboard" className="">
        inicio
      </section>
    </>
  );
}
