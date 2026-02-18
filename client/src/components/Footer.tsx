export default function Footer(){
    return(
            
            <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm containering text-white/70 border-t border-gray-400">
                <p>Copyright © 2026 <a  className="hover:text-blue-500 hover:underline transition-all" href="https://www.linkedin.com/in/nikhil-kurane25/">Nikhil Kurane.</a> All rights reservered.</p>
                <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/nikhil-kurane25/" className="hover:text-blue-500 hover:underline transition-all">
                        Contact Us
                    </a>
                    <div className="h-8 w-px bg-white/20"></div>
                    <a href="#" className="hover:text-blue-500 hover:underline transition-all">
                        Privacy Policy
                    </a>
                    <div className="h-8 w-px bg-white/20"></div>
                    <a href="#" className="hover:text-blue-500 hover:underline transition-all">
                        Trademark Policy
                    </a>
                </div>
            </footer>
       
   
    )
}