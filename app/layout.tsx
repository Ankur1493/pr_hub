import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          " h-screen bg-gray-100 bg-opacity-70 font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <div className="pt-[65px] h-screen ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

