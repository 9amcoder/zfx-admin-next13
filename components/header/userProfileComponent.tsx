import { FunctionComponent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

interface UserProfileComponentProps {
    
}
 
const UserProfileComponent: FunctionComponent<UserProfileComponentProps> = () => {
    return ( 
        <>
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost">
            <span className="font-bold">John Smith </span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              {/* <User className="mr-2 h-4 w-4" /> */}
              <span>English</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* <CreditCard className="mr-2 h-4 w-4" /> */}
              <span>Chinese</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      </>
     );
}
 
export default UserProfileComponent;