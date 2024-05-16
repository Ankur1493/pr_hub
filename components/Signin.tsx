"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Signin() {

  const handleSubmit = () => {
    console.log("submitted")
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Card className="w-[500px] shadow-sm shadow-gray-400">
        < CardHeader >
          <CardTitle>Sign In</CardTitle>
        </CardHeader >
        <CardContent>
          <div className="py-2">
            <label>Email</label>
            <Input className="bg-gray-100 bg-opacity-70" placeholder="ankursharma1493@gmail.com" type="email" />
          </div>
          <div className="py-2">
            <label>Password</label>
            <Input className="bg-gray-100 bg-opacity-70" placeholder="****" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-gradient-to-r from-pink-600 to-red-400 text-white text-2xl py-6" onClick={handleSubmit}>Login</Button>
        </CardFooter>
      </Card >
    </div >
  )
}
