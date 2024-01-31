import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

import { cookies } from "next/headers";

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const data = request.cookies.get("userid");
    const response = NextResponse.next();

    response.cookies.set("camilo", "1998");
    return NextResponse.redirect(
      new URL(`https://www.protolylab.digital?id=${data}`)
    );
  }

  // const cookie = cookies();
  // if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //   const data = cookie.get("userid");
  //   return NextResponse.redirect(
  //     new URL(`https://www.protolylab.digital?id=${data}`)
  //   );
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
  //}

  return;
};
