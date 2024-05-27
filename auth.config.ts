import type { NextAuthConfig } from "next-auth"
import GitHubProvider from "next-auth/providers/github";

export default {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
  ]
} satisfies NextAuthConfig 
