"use client";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <section id="dashboard" className="">
        inicio
      </section>
    </>
  );
}
