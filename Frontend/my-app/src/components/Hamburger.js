"use client";
import { Menu ,LogOut} from "lucide-react"
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Hamburger( {navItems,authPage, fade }){
    const logOut=()=>{
        document.cookie = "loggedin=; path=/; max-age=; "
        // router.replace("/login")
        window.location.replace("/login")
    }
    //  document.body.style.overflow ="hidden"

    return(
        <div>
            <div className={`${!fade?"opacity-0 translate-y-2" : "opacity-100 translate-y-0 "}  transition-all duration-300 ease-in-out     fixed  flex flex-col gap-4 items-center p-5 right-0 top-17 left-0   z-50 translate-y-0  backdrop-blur-md  `} >
            {
          (navItems.map((item) => {
            const active = authPage(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={` text-sm   font-semibold ${active ? "text-[#7763F9]" : "text-gray-500"
                  }`}
              >
                {item.name}
              
              </Link>
            );
          }))}
<button onClick={logOut} >
      <LogOut color="#716f6f" className="hover:scale-108"   />
        </button> 
            </div>
        </div>
    )
}