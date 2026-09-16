"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun,LogOut,Menu,X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";
import Hamburger from "./Hamburger";
import { useState } from "react";
export default function Navbar() {
  const navItems = [
    { name: "Work", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];
  const router = useRouter()
  const path = usePathname();
  const isAuthpage = path === "/login" || path === "/signup"
  const [ham,setHam] = useState(false)

  const isActive = (href) => {
    if (href === "/") {
      return path === "/";
    }

    return path.startsWith(href);
  };
     

  const logOut = ()=>{
    document.cookie = "loggedin=; path=/; max-age=; "
    // router.replace("/login")
    window.location.replace("/login")
  }
  const handleHam =()=>{
    setHam(!ham)
    console.log(ham)
  }
 
  return (
    <>
    <nav className="flex items-center   justify-between border-b-2 dark:border-b sticky top-0 left-0 right-0 z-1  transition-colors duration-300   dark:border-gray-800 
    backdrop-blur-md
      dark: border-[#E8E7E9] px-5 py-5 sm:px-8 lg:px-12 lg:py-6">

      {/* Logo */}
      <h1 className="text-xl font-bold dark:text-white  text-blue-950">
        Nexora
      </h1>

      {/* Navigation */}
      <div className="sm:flex gap-6 sm:gap-8 lg:gap-10 hidden  ">
        {!isAuthpage &&
          (navItems.map((item) => {
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold ${active ? "text-[#7763F9]" : "text-gray-500"
                }`}
                >
                {item.name}

                {active && (
                  <span className="absolute -bottom-4 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#7763F9]" />
                )}
              </Link>
            );
          }))}
      </div>

      {/* Contact */}
      <div className=" hidden sm:flex  items-center gap-3  ">
        {!isAuthpage &&
          <button className="rounded-3xl bg-[#7763F9] px-3 py-2 text-sm text-white hover:bg-[#7258f5da] sm:px-4">
            Get in touch
          </button>}
        <ThemeToggle />  
        {!isAuthpage &&

       <button onClick={logOut} >
      <LogOut color="#ffffff" className=" hover:scale-105"   />
          
        </button>     
}   
      </div>
      <div className=" sm:hidden " >
    <button onClick={handleHam} >{!ham?
      <Menu color="#ffffff" />:
      <X color="#ffffff" />
      
      }

    </button>
      </div>

    </nav>
  
      <div className={``} > 
        <Hamburger navItems={navItems} authPage={isActive} fade={ham}  />
      </div>
   
      
</>
  );
}