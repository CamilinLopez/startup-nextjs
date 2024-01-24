"use client";
import AxiosInstance from "@/config/axiosConfig";
import { error } from "console";
import { useState, useEffect, Suspense } from "react";

type Dataname = {
  givenName: string;
  familyName: string;
};

type Dataemails = {
  value: string;
  verified: boolean;
};

type Dataphotos = {
  value: string;
};

type User = {
  id: string;
  displayName: string;
  name: Dataname;
  emails: Dataemails[];
  photos: Dataphotos[];
  isadmin: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      AxiosInstance.get("/user")
        .then((response) => {
          const userData = response.data;
          setUsers(userData);
        })
        .catch((error) => console.log(error));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOnClick = async ({
    isadmin,
    id,
  }: {
    isadmin: boolean;
    id: string;
  }) => {
    try {
      const response = await AxiosInstance.put("/user", { isadmin, id });
      const updateUser: User[] = (await AxiosInstance.get("/user")).data;
      setUsers(updateUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
        {users.map((user: User) => (
          <div key={user.id} className="grid grid-cols-4 gap-4 py-1">
            <div className="col-span-1">
              <div className="font-mono">{user.name.givenName}</div>
            </div>

            <div className="col-span-1 overflow-x-scroll">
              <div className="font-mono">{user.emails[0].value}</div>
            </div>

            <div className="col-span-1">
              <div className="font-mono">{user.isadmin.toString()}</div>
            </div>
            <div className="col-span-1">
              <div>
                <button
                  onClick={() =>
                    handleOnClick({ isadmin: user.isadmin, id: user.id })
                  }
                  className="w-1/2 rounded-md border bg-primary p-1 text-sm text-white transition duration-300 hover:bg-primary/80"
                >
                  {user.isadmin === true ? "deshabilitar" : "habilitar"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Suspense>
  );
}
