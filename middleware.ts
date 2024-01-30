import { NextRequest, NextResponse } from "next/server";
import url from "url";

export const middleware = async (request: NextRequest) => {
  const { searchParams } = new url.URL(request.url);

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const userid = searchParams.get("id");
    return NextResponse.redirect(
      new URL(`https://www.protolylab.digital?userid=${userid}`)
    );
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
