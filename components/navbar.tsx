"use client";

import {
  CreditCard,
  Menu,
  User,
  ChevronDown,
  Bell,
  AlertCircle,
} from "lucide-react";
import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MobileSidebar from "@/components/mobile-sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import navbarStyles from "./navbar-style";

const NavBar: FunctionComponent = () => {

  const accountName = "ZealCapitalMarket-Live";
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
    </div>
  );
};


export default NavBar;
