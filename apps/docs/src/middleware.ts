import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Redirect to docs/introduction
  // return NextResponse.redirect(new URL('/docs/introduction', request.url), {
  //   status: 303,
  // })
}

export const config = {
  matcher: "/",
};
