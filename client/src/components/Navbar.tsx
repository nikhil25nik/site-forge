import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { authClient } from "@/lib/auth-client";
import {UserButton} from "@daveyplate/better-auth-ui"
import api from '../../configs/axios';
import { toast } from "sonner";


export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [credits,setCredits] = useState(0);

    const {data: session} = authClient.useSession()

    const getCredits = async()=>{
        try{
            const {data} = await api.get("/api/user/credits");
            setCredits(data.credits);

        }catch(error:any){
            toast.error(error?.response?.data?.message || error.message);
            console.log(error);
        }
    }

    useEffect(()=>{
        if(session?.user){
            getCredits();
        }
},[session?.user])

    return(
        <div className="containering border-b border-gray-500 text-white">
                    <nav className='flex items-center justify-between w-full  md:px-16 lg:px-24 xl:px-32 py-4 '>
                        <Link to="/">
           <img
  src={assets.logo}
  alt="NexaCraft Logo"
  className="h-14 sm:h-12   bg-transparent"
/>
                        </Link>

                {/* MENU LINKS */}
                <div className={`max-md:absolute max-md:bg-white/50 max-md:h-196.25 max-md:overflow-hidden max-md:transition-[width] bg-transparent max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col max-md:justify-center max-md:text-lg max-md:backdrop-blur flex items-center gap-8 font-medium ${ menuOpen ? 'max-md:w-full' : 'max-md:w-0' }`} >
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>MyProjects</Link>
                    <Link to='/community'>Community</Link>
                    <Link to='/pricing'>Pricing</Link>
                    <button aria-label='close menu' className='size-6 md:hidden' onClick={() => setMenuOpen(false)}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-x'>
                            <path d='M18 6 6 18M6 6l12 12' />
                        </svg>
                    </button>
                </div>
                {!session?.user ? (<button onClick={()=>navigate("/auth/signin")} className='gap-2 px-3 sm:px-6 py-1 sm:py-2 bg-indigo-700 text-white hover:opacity-90  transition active:scale-95 rounded border border-gray-500'>Get Started</button>):(
                    <>
                    <button className="px-5 py-1.5 text-xs sm:text-sm border text-gray-200 rounded-full">
                        Credits : <span className="text-indigo-700">{credits}</span>
                    </button>
                    <UserButton size="icon"/>
                    </>
                )       
                
                }


                {/* BURGER MENU */}
                <button aria-label='menu burger' className='size-6 md:hidden' onClick={() => setMenuOpen(true)}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-align-justify'>
                        <path d='M3 12h18M3 18h18M3 6h18' />
                    </svg>
                </button>
            </nav>

        </div>

    )
}