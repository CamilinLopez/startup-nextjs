"use client";
import { useState } from "react";

export default function Usuarios() {
  const users = [
    {
      id: "afad",
      nombre: "camilo",
      correo: "camilollc98@gmail.com",
      isAdmin: false,
    },
    {
      id: "sfdgvsd",
      nombre: "tania",
      correo: "tanita98@gmail.com",
      isAdmin: false,
    },
  ];

  return (
    <div className="h-full w-full px-3">
      <div className="mb-4">
        <h3 className="text-xl font-medium">Usuarios</h3>
      </div>
      <div className="mb-3">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <label className="font-medium">Nombre</label>
          </div>
          <div className="col-span-1">
            <label className="font-medium">Correo</label>
          </div>
          <div className="col-span-1">
            <label className="font-medium">IsAdmin</label>
          </div>
          <div className="col-span-1">
            <label className="font-medium">Admin</label>
          </div>
        </div>
      </div>
      {users.map((user) => (
        <div key={user.id} className="grid grid-cols-4 gap-4 py-1">
          <div className="col-span-1">
            <div className="font-mono">{user.nombre}</div>
          </div>

          <div className="col-span-1 overflow-x-scroll">
            <div className="font-mono">{user.correo}</div>
          </div>

          <div className="col-span-1">
            <div className="font-mono">{user.isAdmin.toString()}</div>
          </div>
          <div className="col-span-1">
            <div>
              <button className="rounded-md border bg-primary p-1 text-sm text-white transition duration-300 hover:bg-primary/80">
                habiltar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
