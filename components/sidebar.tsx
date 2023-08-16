"use client";

import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";

interface SidebarProps {}

const routes = [
  {
    label: "Dashboard",
    icon: LayoutGrid,
    href: "/dashboard",
    color: "text-[#64748B]",
  },
  {
    label: "Fund Management",
    icon: DollarSign,
    href: "/wallet",
    color: "text-[#64748B]",
  },
  {
    label: "Trading",
    icon: TrendingUp,
    href: "/dashboard",
    color: "text-[#64748B]",
  },
  {
    label: "Refer Client",
    icon: Network,
    href: "/dashboard",
    color: "text-[#64748B]",
  },
  {
    label: "Report",
    icon: AlignEndHorizontal,
    href: "/dashboard",
    color: "text-[#64748B]",
  },
  {
    label: "Personal Information",
    icon: Contact,
    href: "/dashboard",
    color: "text-[#64748B]",
  },
  {
    label: "Setting",
    icon: Settings,
    href: "/dashboard",
    color: "text-[#64748B]",
  },
  {
    label: "Logout",
    icon: LogOut,
    href: "/dashboard",
    color: "text-[#64748B]",
  },
];

const Sidebar: FunctionComponent<SidebarProps> = () => {

  const [isMounted, setIsMounted ] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#F6F6F6] text-[#64748B]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-20 w-20 mr-2">
            <Image fill alt="Logo" src="/zfx-logo.png" />
          </div>
        </Link>
        <div className="space-y-5">
          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-sky-500 hover:bg-white/10 rounded-lg transition",
                // pathname === route.href
                //   ? "text-white bg-white/10"
                //   : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
