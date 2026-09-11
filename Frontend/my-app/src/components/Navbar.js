"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navItems = [
    { name: "Work", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  const path = usePathname();

  const isActive = (href) => {
    if (href === "/") {
      return path === "/";
    }

    return path.startsWith(href);
  };

  return (
    <nav className="flex items-center justify-between border-2 border-[#E8E7E9] px-5 py-5 sm:px-8 lg:px-12 lg:py-6">

      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-950">
        Nexora
      </h1>

      {/* Navigation */}
      <div className="flex gap-6 sm:gap-8 lg:gap-10">
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-semibold ${
                active ? "text-[#7763F9]" : "text-gray-500"
              }`}
            >
              {item.name}

              {active && (
                <span className="absolute -bottom-4 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#7763F9]" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Contact */}
      <button className="rounded-3xl bg-[#7763F9] px-3 py-2 text-sm text-white hover:bg-violet-600 sm:px-4">
        Get in touch
      </button>

    </nav>
  );
}