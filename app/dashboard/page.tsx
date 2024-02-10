"use client";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const params = useSearchParams();
  console.log(params);
  return (
    <>
      <section id="dashboard" className="">
        inicio
      </section>
    </>
  );
}
