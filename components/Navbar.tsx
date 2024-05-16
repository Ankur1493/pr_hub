import Link from "next/link"
import { Button } from "./ui/button"
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <div className="h-16 px-16 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold text-yellow-800">
        PrHub
      </div>
      <div className="flex">
        <Link href={"/"}>
          <Button className="bg-black text-white mr-4">Login</Button>
        </Link>
        <Link href={"/"} >
          <Button className="flex border font-semibold bg-gradient-to-r from-pink-600 to-red-400 text-white"> <Github /> Star us</Button>
        </Link>
      </div>
    </div>
  )
}

