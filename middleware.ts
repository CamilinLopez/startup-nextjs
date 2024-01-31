import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

import { cookies } from "next/headers";

export const middleware = async (req: NextApiRequest, request: NextRequest) => {
  const viewedWelcomeMessage = req.cookies.userid;

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(
      new URL(`https://www.protolylab.digital?id=${viewedWelcomeMessage}`)
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
