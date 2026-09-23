import { NextResponse } from "next/server";
import { getSiteUrl } from "./lib/site-url";

// BLOG SUSPENSO — redireciona /blog e /blog/* para a home.
// Para reativar o blog, APAGUE este arquivo (ver docs/blog-pausado.md).
export function middleware() {
  return NextResponse.redirect(new URL("/", getSiteUrl()));
}

export const config = {
  matcher: ["/blog", "/blog/:path*"],
};
