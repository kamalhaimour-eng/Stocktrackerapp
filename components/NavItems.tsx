import { NAV_ITEMS } from "@/lib/constants"
import { Link } from "lucide-react"


const NavItems = () => {
    const isActive = (path:string) =>{
        if(path === '/')
    }
  return (
    // creates ul to flex container and makes flex direction column
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
        {/* Map goes through every item in the array and gives each li a key eqaul to the href provided */}
       {NAV_ITEMS.map((href,label) =>(
            <li key={href}>
                <Link href={href} className={`hover:text-#1C39BB-500 transition-colors
                    ${isActive(href) ? 'text-gray-100': ''}`}  ></Link>
            </li>
       ))}
    </ul>
  )
}

export default NavItems