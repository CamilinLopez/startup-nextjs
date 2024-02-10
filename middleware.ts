import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
const BACK_PRODUCTION_URL = process.env.BACK_PRODUCTION_URL;
const CLIENT_PRODUCTION_URL = process.env.CLIENT_PRODUCTION_URL;

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();
  const { cookies } = response;

  const {
    nextUrl: { searchParams },
  } = request;

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const idcookie = request.cookies.get("userid");
    const idparams = searchParams.get("id");
    let id: any;

    if (idcookie) id = idcookie.value;
    if (idparams && !id) id = idparams;

    try {
      const response = await fetch(
        `${BACK_PRODUCTION_URL}/auth/google/verify?id=${id}`
      );
      const dataUser = await response.json();

      if (dataUser.error) throw new Error(dataUser.error);
      if (!dataUser.validtoken || !dataUser.isadmin)
        throw new Error(dataUser.error);

      if (dataUser.validtoken && dataUser.isadmin) {
        let expiredDate = new Date();
        expiredDate.setTime(expiredDate.getTime() + 1 * 60 * 60 * 1000);

        cookies.set("userid", dataUser.user.userId, {
          expires: expiredDate,
          domain: ".protolylab.digital",
          secure: true,
        });
        cookies.set("token", dataUser.token, {
          expires: expiredDate,
          domain: ".protolylab.digital",
          secure: true,
        });
        cookies.set("isadmin", dataUser.isadmin, {
          expires: expiredDate,
          domain: ".protolylab.digital",
          secure: true,
        });
      }
    } catch (error) {
      return NextResponse.redirect(
        new URL(`${CLIENT_PRODUCTION_URL}`, request.url)
      );
    }
  }
  return response;
};
