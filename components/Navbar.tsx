import Link from "next/link"
import { Button } from "./ui/button"
import { Github } from "lucide-react"
import { SignIn } from "./SignIn"

export default function Navbar() {
  return (
    <div className="h-16 px-16 flex justify-between items-center shadow-md shadow-gray-400">
      <div className="text-2xl font-bold text-yellow-800">
        PrHub
      </div>
      <div className="flex">
        <SignIn />
        <Link href={"/https://github.com/ankur1493/pr_hub"} >
          <Button className="flex border font-semibold bg-gradient-to-r from-pink-600 to-red-400 text-white"> <Github /> Star us</Button>
        </Link>
      </div>
    </div>
  )
}

