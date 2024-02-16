import decodedToken from "@/utils/decodetokens";
import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    const token = request.cookies.get("token")?.value || "";
    console.log(token);
    if (token) {
      const tokenvalue = await decodedToken(token);
      console.log(tokenvalue);
    }

    if (request.nextUrl.pathname.startsWith("/about")) {
      return NextResponse.rewrite(new URL("/admin", request.url));
    }
    const path = request.nextUrl.pathname;
    const publicPaths = ["/login", "/register"];

    if (publicPaths.includes(path)) {
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png|.*\\.svg$).*)", "/"],
};
