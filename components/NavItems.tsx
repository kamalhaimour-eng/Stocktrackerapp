// Tells react and next.js to treat file as client component
'use client'

import { NAV_ITEMS } from "@/lib/constants"
import Link from "next/link";
import { usePathname } from "next/navigation"


const NavItems = () => {
    
    const pathname:string = usePathname()

// checking if the user is on the home page 
    const isActive = (path:string) =>{
        if(path === '/') return pathname === '/';

        return pathname.startsWith(path)

    }
  return (
    // creates ul to flex container and makes flex direction column
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
        {/* Map goes through every item in the array and gives each li a key eqaul to the href provided */}
       {NAV_ITEMS.map( ({href,label}) =>(
            <li key={href}>
                <Link href={href} className={`hover:text-[#1c39bb]/90 transition-colors ${isActive(href) ? 
                  'text-gray-100': ''}`}>
                  {label}

                </Link>
            </li>
       ))}
    </ul>
  )
}

export default NavItems