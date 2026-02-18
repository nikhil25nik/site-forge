import { useParams} from 'react-router-dom';
import { AuthView } from "@daveyplate/better-auth-ui"

export default function AuthPage() {
  const { pathname } = useParams()

  return (
    <main className="p-6 flex flex-col justify-center items-center text-white h-screen containering">
      <AuthView pathname={pathname} classNames={{base:"bg-white/10 text-white ring ring-indigo-900",footer:"text-white",footerLink:"text-white"}}/>
    </main>
  )
}