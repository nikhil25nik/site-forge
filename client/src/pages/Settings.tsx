import { AccountSettingsCards ,ChangePasswordCard, DeleteAccountCard  } from "@daveyplate/better-auth-ui"


export default function Settings(){
    return(
        <div className="w-full p-4 flex justify-center items-center min-h-[90vh] flex-col gap-6 py-12 containering">
            <AccountSettingsCards classNames={{
                card:{
                    base:"bg-white/5 text-white ring ring-indigo-950 max-w-xl mx-auto",
                    footer:"bg-white/7 ring ring-indigo-950"
                }
            }}/>

             <div className="w-full">
            <ChangePasswordCard classNames={{
                    base:"bg-white/4 text-white ring ring-indigo-950 max-w-xl mx-auto",
                    footer:"bg-white/10 ring ring-indigo-950"
            }}/>
        </div>
         <div className="w-full">
            <DeleteAccountCard classNames={{
                base:"bg-black/10 text-white ring ring-indigo-950 max-w-xl mx-auto",
            }}/>
        </div>
        </div>
    )
}