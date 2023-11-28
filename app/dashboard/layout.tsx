import { Suspense } from "react";
import MenuDashboard from "@/components/dashboard/menu";
import HeaderDashboard from "@/components/dashboard/header";

export default function layoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="flex flex-col">
        <div>
          <HeaderDashboard />
        </div>
        <div className="flex py-5">
          <div>
            <MenuDashboard />
          </div>
          <div className="w-full flex items-center justify-center" >{children}</div>
        </div>
      </div>
    </Suspense>
  );
}
