"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";
import Image from "next/image";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";




export const UserDropdown = () => {

// control navigation using JavaScript in a Next.js app.
  const router = useRouter();

  const handleSignOut = async () => {
    // takes you to the sign in page when you log out
    router.push('/sign-in')
  }

  const user = {name: "Kamal" , email:'kamalhaimour@gmail.com'};
  return (
    <div className="open">
    <DropdownMenu >
        <DropdownMenuTrigger  render={<Button variant="ghost" className = " relative flex items-center gap-3 text-gray-4 hover:text-[#1c39bb]/90"/>}>
            <div className="relative h-16 w-20 flex items-center justify-center">
              <Image alt="left sword" src='/assets/leftsword.png' width={300} height={160} className = "leftsword flex"></Image>
              <Image alt="right sword" src='/assets/rightsword.png' width={300} height={160} className = "rightsword flex "></Image>
              <Avatar className = "h-13 w-13 back">
                <AvatarImage src="assets/profilelogo.png" />
                {/* Fall is used if Image doesnt load  */}
                <AvatarFallback className = "bg-yellow-500 text yellow-900 text-small font-bold">
                  {user.name[0]}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className=" hidden relative bottom md:flex flex-col items-start">
                <span className="text-base font-medium text-gray-400">
                  {user.name}
                </span>
              </div>
        </DropdownMenuTrigger>
    
        <DropdownMenuContent className= "text-gray-400 w-65" >

          <DropdownMenuGroup>
            <DropdownMenuLabel>
                  <div className="flex relative items-cneter gap-3 py-2">

                    <Avatar className = "h-13 w-13 back">
                        <AvatarImage src="assets/profilelogo.png" />
                        {/* Fall is used if Image doesnt load  */}
                        <AvatarFallback className = "bg-yellow-500 text yellow-900 text-small font-bold">
                          {user.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className=" flex flex-col ">
                        <span className="text-base font-medium text-gray-400">
                          {user.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {user.email}
                        </span>
                      </div>
                  </div>
              </DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className='bg-gray-600' />
          
          <DropdownMenuItem onClick={handleSignOut} className='text-gray-100 text-md font medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer '>
            <LogOut className="h-4 w-4 mr-2 hidden sml:bloack" />
            Logout
          </DropdownMenuItem>
          <DropdownMenuSeparator className='bg-gray-600 hidden sm:block' />
            <nav className="sm:hidden">
              <NavItems />
            </nav>
            

        </DropdownMenuContent>
      </DropdownMenu>
</div>
  )
  
}
