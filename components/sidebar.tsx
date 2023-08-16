"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  DollarSign,
  TrendingUp,
  Network,
  AlignEndHorizontal,
  Contact,
  Settings,
  LogOut,
  Circle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Separator } from "./ui/separator";

interface SidebarProps {}

const routes = [
  {
    id: 1,
    label: "Dashboard",
    icon: LayoutGrid,
    href: "/dashboard",
    color: "text-[#64748B]",
    collapsible: false,
  },
  {
    id: 2,
    label: "Fund Management",
    icon: DollarSign,
    href: "/wallet",
    color: "text-[#64748B]",
    collapsible: true,
  },
  {
    id: 3,
    label: "Trading",
    icon: TrendingUp,
    href: "/trading",
    color: "text-[#64748B]",
    collapsible: false,
  },
  {
    id: 4,
    label: "Refer Client",
    icon: Network,
    href: "/refer",
    color: "text-[#64748B]",
    collapsible: false,
  },
  {
    id: 5,
    label: "Report",
    icon: AlignEndHorizontal,
    href: "/report",
    color: "text-[#64748B]",
    collapsible: false,
  },
  {
    id: 6,
    label: "Personal Information",
    icon: Contact,
    href: "/profile",
    color: "text-[#64748B]",
    collapsible: false,
  },
  {
    id: 7,
    label: "Setting",
    icon: Settings,
    href: "/setting",
    color: "text-[#64748B]",
    collapsible: false,
  },
  {
    id: 8,
    label: "Logout",
    icon: LogOut,
    href: "/logout",
    color: "text-[#64748B]",
    collapsible: false,
  },
];

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="space-y-4 flex flex-col h-full sm:w-4/6 md:w-full bg-slate-100 text-[#64748B]">
        <div className="sm:p-2 md:p-5 lg:p-10 xl:p-12 flex-1">
          <Link href="/dashboard" className="flex items-center mb-10">
            <div className="relative h-20 w-20 mr-2">
              <Image fill alt="Logo" src="/zfx-logo.png" />
            </div>
          </Link>
          <div className="space-y-8 flex-col">
            {routes.map((route) =>
              route.collapsible ? (
                <div key={route.id}>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <div className="flex items-center flex-1">
                        <route.icon
                          className={cn("h-5 w-5 mr-3", route.color)}
                        />
                        <AccordionTrigger>{route.label}</AccordionTrigger>
                      </div>
                      <div className="flex flex-col font-medium md:items-center pt-3">
                         <AccordionContent className="cursor-pointer hover:text-cyan-500">Deposit </AccordionContent>
                        <AccordionContent className="cursor-pointer hover:text-cyan-500" >Withdrawal</AccordionContent>
                        <AccordionContent className="cursor-pointer hover:text-cyan-500" >Internal Transfer </AccordionContent>
                        <AccordionContent className="cursor-pointer hover:text-cyan-500">Transfer Out</AccordionContent>
                        <Link
                          href={"/wallet"}
                          className={cn(
                            "cursor-pointer hover:text-cyan-500 rounded-lg",
                            pathname === "/wallet" && "text-cyan-400"
                          )}
                        >
                            <AccordionContent>
                            <div className="flex flex-row">
                              <div>
                              <p>Wallet</p>
                              </div>
                              <div>{pathname === "/wallet" && (
                              <Circle
                                className={cn(
                                  "absolute",
                                  "rounded-full",
                                  "h-2 w-2 mt-1 sm:ml-2 md:ml-5 lg:ml-10 xl:ml-12 ",
                                  "text-cyan-400 bg-cyan-400"
                                )}
                              />
                            )}</div>
                              
                             </div>
                            </AccordionContent>
                         
                        </Link>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </div>
              ) : (
                <div key={route.id} className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.href === "/dashboard" ? (
                    <Link
                      href={route.href}
                      key={route.href}
                      className={cn(
                        "text-md group flex p-0 w-full justify-start font-medium cursor-pointer hover:text-cyan-500 rounded-lg transition",
                        pathname === route.href && "text-cyan-400"
                      )}
                    >
                      <div className="flex items-center flex-1">
                        {route.label}
                        {pathname === route.href && (
                          <Circle
                            className={cn(
                              "rounded-full",
                              "h-2 w-2 sm:ml-2 md:ml-5",
                              "text-cyan-400 bg-cyan-400",
                            )}
                          />
                        )}
                      </div>
                    </Link>
                  ) : (
                    <div className="cursor-pointer hover:text-cyan-500">{route.label}</div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
