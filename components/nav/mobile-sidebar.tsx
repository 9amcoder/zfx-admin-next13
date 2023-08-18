"use client";

import { Menu } from "lucide-react";
import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/nav/sidebar";

interface MobileSidebarProps {}

const MobileSidebar: FunctionComponent<MobileSidebarProps> = () => {

  const [isMounted, setIsMounted ] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-1/2 bg-cyan-50">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
