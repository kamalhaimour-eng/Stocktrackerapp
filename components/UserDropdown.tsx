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




export const UserDropdown = () => {

// control navigation using JavaScript in a Next.js app.
  const router = useRouter();

  const handleSignOut = async () => {
    // takes you to the sign in page when you log out
    router.push('/sign-in')
  }

  const user = {name: "Kamal" , email:'kamalhaimour@gmail.com'};
  return (
    <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" />}>
            <Button variant="ghost" className = "group relative flex items-center gap-3 text-gray-4 hover:text-[#1c39bb]/90">
              <Image alt="left sword" src='/assets/leftsword.png' width={300} height={160} className = "leftsword"></Image>
              <Image alt="right sword" src='/assets/rightsword.png' width={300} height={160} className = "rightsword"></Image>
              <Avatar className = "h-15 w-15">
                <AvatarImage src="assets/profilelogo.png" />
                {/* Fall is used if Image doesnt load  */}
                <AvatarFallback className = "bg-yellow-500 text yellow-900 text-small font-bold">
                  {user.name[0]}


                </AvatarFallback>
              </Avatar>
              
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
</DropdownMenu>
  )
}
