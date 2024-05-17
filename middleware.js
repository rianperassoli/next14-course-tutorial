import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/about/:path*"], //match everything after about route and redirect it to "/" on the middleware function
};
