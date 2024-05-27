import Link from "next/link"
import { Button } from "./ui/button"
import { Github } from "lucide-react"
import { SignIn } from "./SignIn"

export default function Navbar() {
  return (
    <div className="h-[60px] px-12 w-screen fixed flex justify-between items-center shadow-md shadow-gray-300">
      <Link href={"/"} className="text-2xl font-bold text-yellow-800">
        PrHub
      </Link>
      <div className="flex gap-4">
        <SignIn />
        <Link href={"/https://github.com/ankur1493/pr_hub"} >
          <Button className="flex border font-semibold bg-gradient-to-r from-pink-600 to-red-400 text-white"> <Github /> Star us</Button>
        </Link>
      </div>
    </div>
  )
}

