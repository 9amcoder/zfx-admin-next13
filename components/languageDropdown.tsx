import { FunctionComponent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

interface LanguageDropdownProps {}

const LanguageDropdown: FunctionComponent<LanguageDropdownProps> = () => {
  return (
    <>
      <Avatar className="h-8 w-8 mt-1">
        <AvatarImage src="https://e7.pngegg.com/pngimages/475/194/png-clipart-flag-of-england-english-actuator-england-english-flag-thumbnail.png" />
        <AvatarFallback>EN</AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost">
            <span className="font-bold">EN: </span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Language</DropdownMenuLabel>
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
};

export default LanguageDropdown;
