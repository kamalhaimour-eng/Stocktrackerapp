import Link from "next/link"
import Image from "next/image"
import NavItems from "@/components/NavItems"
import { UserDropdown } from "./UserDropdown"

const Header = () => {
  return (
    <header className = "sticky top-0 header" >

        <div className='container header-wrapper'>
            <Link href="/">
                <Image  src="/assets/kamalslogo2.png" alt="tracker logo"  loading="eager" width={300} height={160} className="h-15 w-auto cursor-pointer"></Image>
            </Link>
            <nav className="hidden sm:block">
                <NavItems />
            </nav>
            <UserDropdown/>
        
        </div>
    </header>
  )
}

export default Header