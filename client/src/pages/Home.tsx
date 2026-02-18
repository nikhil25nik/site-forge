import { authClient } from "@/lib/auth-client";
import api from "../../configs/axios";
import React, {  useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";



export default function Home(){

    const {data:session } = authClient.useSession();
    const navigate = useNavigate();


    const [input,setInput] = useState('');
    const [loading,setLoading] = useState(false);

    const onSubmitHandler = async(e:React.FormEvent)=>{
        e.preventDefault();

        try{
            if(!session?.user){
                return toast.error("Please sign in to create project");
            }else if(!input.trim()){
                return toast.error("Please enter a message");
            }
            setLoading(true);
          const { data } = await api.post("/api/user/project", {
      initial_prompt: input,
    });
            setLoading(false);
            navigate(`/projects/${data.projectId}`);


        }catch(error:any){
            setLoading(true);
            toast.error(error?.response?.data?.message || error.message);
            console.log(error);
        }

    }

    
    return (
        <div className="w-full containering text-white">

        <main className="flex flex-col justify-between items-center min-h-screen  bg-cover bg-center text-sm text-white px-4 text-center">
            {/* NAVBAR */}

            {/* HERO CONTENT */}
            <div className='flex flex-col items-center justify-center flex-1 w-full'>
                <h1 className='text-4xl md:text-[40px] '>What do you want to create?</h1>
                <p className='text-base mt-6'>Create something amazing with one simple message.</p>

                {/* INPUT BOX */}

                <form  onSubmit={onSubmitHandler} className='max-w-xl w-full bg-gray-900 rounded-xl overflow-hidden mt-4'>

                
                    <textarea  value={input}
  onChange={(e) => setInput(e.target.value)} className='w-full p-3 pb-0 resize-none outline-none bg-transparent text-white' placeholder='Tell us about your idea'  />
                    <div className='flex items-center justify-self-end pb-3 px-3'>
                
                        <button  className='flex items-center justify-center p-1 rounded size-6 bg-indigo-600' aria-label='Send'>
                            {!loading ? ( <svg width='11'  height='12' viewBox='0 0 11 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M1 5.5 5.5 1 10 5.5m-4.5 5.143V1' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>):(<>
                            <Loader2Icon className="animate-spin size-4 text-white"/>
                            </>)}
                           
                        </button>
                    </div>
               

                </form>

                {/* FAQ LINKS */}
                <div className='grid grid-cols-2 gap-4 mt-8 text-slate-500'>
                    <p className='cursor-pointer'>create my portfolio website</p>
                    <p className='cursor-pointer'>Build my personal branding website.</p>
                    <div className='w-full h-px bg-gray-400/50'></div>
                    <div className='w-full h-px bg-gray-400/50'></div>
                    <p className='cursor-pointer'>Create a gaming website with leaderboard.</p>
                    <p className='cursor-pointer'>Generate a fitness trainer website</p>
                </div>
            </div>

            <p className='text-gray-500 pb-3'> By messaging us, you agree to our <a href='#' className='underline'> Terms of Use </a> and confirm you've read our <a href='#' className='underline'> Privacy Policy </a> .</p>
        </main>
        </div>

    )
}