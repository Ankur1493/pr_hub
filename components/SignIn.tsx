import { auth, signIn, signOut } from "@/auth"
import { Button } from "./ui/button";

export async function SignIn() {
  const session = await auth();

  const handleSignout = async () => {
    "use server"
    await signOut();
  }

  const handleLogin = async () => {
    "use server"
    await signIn();
  }

  return (
    <div>
      {
        session ? (
          <form action={handleSignout}>
            <Button className="bg-black text-white mr-4">Sign Out</Button>
          </form>
        ) : (
          <form action={handleLogin}>
            <Button className="bg-black text-white mr-4">Sign In</Button>
          </form>
        )
      }
    </div>
  )
}
