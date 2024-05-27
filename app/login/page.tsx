import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react"
import { signIn } from "@/auth"

const fontLogin = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const LoginPage = () => {
  return (
    <div className={cn(
      "h-full flex flex-col justify-center gap-5 items-center",
    )}>
      <div className={cn("text-center px-3", fontLogin.className)}>
        <h1 className="md:text-9xl text-6xl">Let's begin the journey</h1>
        <p className="text-2xl my-16">Increase your chances of getting hired by showcasing your best pull requests</p>
      </div>
      <div>
        <form action={async () => {
          "use server"
          await signIn("github", {
            redirectTo: "/home"
          })
        }}>
          <Button className="w-80 sm:w-[300px] rounded-[50px] py-6 flex gap-5 text-3xl text-white bg-gray-900"> Login with <Github /></Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

