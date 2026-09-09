"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const navItems = [
        { name: "Work", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" }
    ]
    const path = usePathname()

    const isActive = (href) => {
        if (href === "/") {
            return path === "/"
        }
        return path.startsWith(href)
    }
    return (
        <nav className=" flex justify-between px-12   py-6 items-center border-2 border-[#E8E7E9]    " >
            <h1 className=" text-xl text-blue-950 font-bold  " >
                Nexora
            </h1>
            <div className=" flex gap-10 " >
                {
                    navItems.map((item) =>
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`font-semibold text-sm relative  ${isActive(item.href) ? "text-[#7763F9]   " : "text-gray-500"}`}
                        >
                            {item.name}
                            {isActive(item.href) && (
                                <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-1.5 h-1.5 bg-[#7763F9] rounded-full" />
                            )}
                        </Link>


                    )
                }


            </div>
            <button className=" bg-[#7763F9] text-white text-sm py-2 px-4 rounded-3xl hover:bg-violet-600   " >
                Get in touch
            </button>
        </nav>
    )
}