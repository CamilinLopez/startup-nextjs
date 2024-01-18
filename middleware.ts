import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const { cookies } = request;

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // const token = request.nextUrl.searchParams.get("token");
    const token = cookies.get("token")?.value;
    const id = cookies.get("id")?.value;

    if (!token || !id) {
      return NextResponse.redirect(new URL("http://localhost:3000"));
    }

    try {
      const response = await fetch("http://localhost:3001/verify", {
        headers: {
          Authorization: `${token}`,
        },
      });
      const data = await response.json();

      const dataUser = await fetch(`http://localhost:3001/user?id=${id}`, {
        method: "GET",
      });

      const data1 = await dataUser.json();

      if (!data.autenticado || !data1.isadmin)
        return NextResponse.redirect(new URL("http://localhost:3000"));
    } catch (error) {
      console.log(error);
    }
  }

  return;
};
