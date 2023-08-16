
import { FunctionComponent, useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, CreditCard, User } from "lucide-react";

interface AccountComponentProps {
    
}
 
const AccountComponent: FunctionComponent<AccountComponentProps> = () => {
  

    const accountName = "John Doe";

    return ( 
      <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="rounded-full">
                <span className="font-bold">Account: </span>
                <span className="mx-2">{accountName}</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
      </div>
        
     );
}
 
export default AccountComponent;