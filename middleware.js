import decodedToken from "@/utils/decodetokens";
import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const isAdmin = token
      ? (await decodedToken(token)).payload.tokenData.isAdmin
      : false;

    const path = request.nextUrl.pathname;
    const publicPaths = ["/login", "/register"];

    if (publicPaths.includes(path)) {
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if (path.startsWith("/dashboard") && isAdmin) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
    if (path.startsWith("/admin") && !isAdmin) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
    if (path === "/") {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Error in middleware:", error);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png|.*\\.svg$).*)"],
};
