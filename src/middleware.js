// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const step = req.cookies.get("currentStep")?.value || "1";

  // Example: Prevent skipping ahead
  if (url.pathname === "/step2" && step < "2") {
    return NextResponse.redirect(new URL("/step1", req.url));
  }
  if (url.pathname === "/step3" && step < "3") {
    return NextResponse.redirect(new URL("/step2", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/step1", "/step2", "/step3"], // pages to watch
};
