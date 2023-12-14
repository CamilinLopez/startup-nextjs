import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const { cookies } = request;

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // const token = request.nextUrl.searchParams.get("token");
    const token = cookies.get("token")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("http://localhost:3000"));
    }
    
    try {
      const response = await fetch("http://localhost:3001/verify", {
        headers: {
          Authorization: `${token}`,
        },
      });
      const data = await response.json();
      // console.log(data)
      if (!data.autenticado)
        return NextResponse.redirect(new URL("http://localhost:3000"));
    } catch (error) {
      console.log(error);
    }
  }

  return;
};
