import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const { cookies } = request;

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    cookies.set("infocami", "1998");
    return NextResponse.redirect(new URL("http://localhost:3000"));
    // if (!token || !id) {
    //   return NextResponse.redirect(new URL("https://www.protolylab.digital"));
    // }

    // try {
    //   const response = await fetch("https://protolylab.onrender.com/verify", {
    //     headers: {
    //       Authorization: `${token}`,
    //     },
    //   });
    //   const data = await response.json();
    //   console.log(data);

    //   const dataUser = await fetch(
    //     `https://protolylab.onrender.com/user?id=${id}`,
    //     {
    //       method: "GET",
    //     }
    //   );

    //   const data1 = await dataUser.json();

    //   if (!data.autenticado || !data1.isadmin)
    //     return NextResponse.redirect(new URL("https://www.protolylab.digital"));
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return;
};
