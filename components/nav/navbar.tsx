import { FunctionComponent, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MobileSidebar from "@/components/nav/mobile-sidebar";
import NotificationIcon from "../header/notificationIconComponent";
import BellIconComponent from "../header/belliconComponent";

const NavBar: FunctionComponent = () => {

  return (
    <div className="flex items-center p-4 md:hidden">
      <MobileSidebar />
      <div className="flex items-center ml-auto">
        <NotificationIcon />
        <BellIconComponent />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};


export default NavBar;