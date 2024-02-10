"use client";
import { useRouter } from "next/router";

export const addquery = () => {
  const router = useRouter();
  console.log(router.query);
};

export default function Dashboard() {
  addquery();
  return (
    <>
      <section id="dashboard" className="">
        inicio
      </section>
    </>
  );
}
