import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import { apiAuthPrefix, publicRoutes } from "@/routes"
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {

  const isLoggedIn = !!req.auth
  console.log(`status -- ${isLoggedIn}`)
  const pathName = req.nextUrl.pathname;

  const isPublicRoute = publicRoutes.includes(pathName);
  const isApiAuthRoute = pathName.startsWith(apiAuthPrefix);

  if (isApiAuthRoute) {
    return NextResponse.next();
  }
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
