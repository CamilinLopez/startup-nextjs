import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse, NextApiRequest } from "next";
import cookies from "next-cookies";

export const middleware = async (
  request: NextRequest,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // const { cookies } = request;
  const { userid } = cookies({ req });

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    res.setHeader("Set-Cookie", "infocamiii=15687222145; Path=/; HttpOnly");
    console.log("cookie infocamii puesta");
    // cookies.set("infocami", "1998");
    return NextResponse.redirect(new URL("https://www.protolylab.digital"));
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
