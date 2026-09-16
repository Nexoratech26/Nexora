import { NextResponse } from "next/server";

export function middleware(request) {
  const loggedIn = request.cookies.get("loggedIn")?.value;
  const pathname = request.nextUrl.pathname;

  if (pathname === "/login" || pathname === "/signup") {
    return NextResponse.next();
  }

  if (!loggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const response = NextResponse.next();

  response.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );

  return response;
}

export const config = {
  matcher: ["/", "/services/:path*", "/about/:path*"],
};