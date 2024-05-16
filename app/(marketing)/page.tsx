import Link from "next/link"
import { Award } from "lucide-react"


export default function() {

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 pt-[80px]">
      <div className="flex items-center justify-center p-3 px-4 bg-orange-200 border-red-950 border rounded-[50px] text-[24px] font-semibold mb-10">
        <div className="pr-1" ><Award size={30} /></div>
        <h1 className="text-red-950">
          Best way to show coding proof
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold">
          Pr Hub help you showcase
        </h1>
        <div className="mt-4 w-fit text-6xl rounded-lg bg-gradient-to-r from-pink-600 to-red-400 text-white font-bold text-center p-4">
          Pull Requests
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-gray-400 w-2/3">
        <p className="text-2xl font-bold mt-5 text-center w-[50%]">
          Highlight Your GitHub PRs Use our interactive platform to showcase your contributions and land your next project or job with proof of your skills.
        </p>
      </div>
      <Link
        href={"/"}
        className="mt-8 p-3 px-5 border-white bg-black text-white text-[20px] font-semibold rounded-xl"
      >
        Create you hub for free
      </Link>
    </div>
  )
}
