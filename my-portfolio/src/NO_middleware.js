import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  // si le chemin d'accès ne spécifie pas la langue, rediriger vers /en
  if (!pathname.startsWith("/fr") && !pathname.startsWith("/en")) {
    return NextResponse.redirect("/en" + pathname);
  }
}
