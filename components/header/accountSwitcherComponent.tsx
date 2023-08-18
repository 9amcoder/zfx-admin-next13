import { FunctionComponent } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown, User } from "lucide-react";

interface AccountComponentProps {}

const AccountSwitcherComponent: FunctionComponent<AccountComponentProps> = () => {
  const accountName = "ZealCapitalMarket-Live";

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className="rounded-full">
            <span className="font-bold">Account: </span>
            <span className="mx-2 text-slate-400 text-xs font-light">{accountName}</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Switch Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Account A</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Account B</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AccountSwitcherComponent;
