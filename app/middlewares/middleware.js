// import decodeToken from "@/utils/decodetoken";
// import { NextResponse } from "next/server";

// export async function middleware(request) {
//   try {
//     const token = request.cookies.get("token")?.value || "";
//     const { isAdmin } = await decodeToken(request);

//     const path = request.nextUrl.pathname;
//     const publicPaths = ["/login", "/register", "/dashboard"];

//     if (publicPaths.includes(path)) {
//       return NextResponse.next();
//     }

//     if (!token) {
//       return NextResponse.redirect(new URL("/login", request.nextUrl));
//     }

//     // Redirect to /dashboard if not admin and trying to access /admin
//     if (path.startsWith("/admin") && !isAdmin) {
//       return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
//     }

//     // Allow access to /admin if user has admin privileges
//     if (path.startsWith("/admin") && isAdmin) {
//       return NextResponse.next();
//     }

//     return NextResponse.next();
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png|.*\\.svg$).*)"],
// };
