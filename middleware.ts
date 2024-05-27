import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, publicRoutes } from "@/routes"
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {

  const isLoggedIn = !!req.auth
  const pathName = req.nextUrl.pathname;

  const isPublicRoute = publicRoutes.includes(pathName);
  const isApiAuthRoute = pathName.startsWith(apiAuthPrefix);
  const isAuthRoute = pathName.match("login")

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
    }
    return NextResponse.next()
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
