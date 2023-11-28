"use client";

import { List } from "./type";
import { Search, PrintList, Botones, Modal } from "./utils";

export const listDashboard: List[] = [
  {
    id: "1",
    title: "Proyectos",
    path: "/dashboard/proyectos",
  },
  {
    id: "2",
    title: "Pricing",
    path: "/dashboard/pricing",
  },
  {
    id: "3",
    title: "Stack",
    path: "/dashboard/stack",
  },
  {
    id: "4",
    title: "FAQ",
    path: "/dashboard/faq",
  },
];

export const listPrincipal: List[] = [
  {
    id: "1x",
    title: "Inicio",
    path: "/dashboard",
  },
];

export default function MenuDashboard() {
  return (
    <div className="hidden px-6 lg:block">
      <div className="flex w-full flex-col items-start">
        <div className="flex w-full flex-col items-start space-y-2">
          <h3 className="text-xl font-bold">Dashboard</h3>
          <Botones />
        </div>
        <div className="my-5">
          <Search />
        </div>
        <div>
          <PrintList data={listDashboard} />
        </div>
        <div className="my-4">
          <PrintList data={listPrincipal} />
        </div>
      </div>
    </div>
  );
}
