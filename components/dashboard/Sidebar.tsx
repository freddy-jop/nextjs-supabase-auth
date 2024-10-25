"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { Images, LayoutDashboard } from "lucide-react";
import { LoggedButton } from "./LoggedButton";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Opimisation",
    icon: Images,
    href: "/optimizer",
    color: "text-violet-500",
  },
  // {
  //   label: "Image Generation",
  //   icon: ImageIcon,
  //   href: "/image",
  //   color: "text-pink-700",
  // },
  // {
  //   label: "Video Generation",
  //   icon: VideoIcon,
  //   href: "/video",
  //   color: "text-orange-700",
  // },
  // {
  //   label: "Music Generation",
  //   icon: Music,
  //   href: "/music",
  //   color: "text-emerald-500",
  // },
  // {
  //   label: "Code Generation",
  //   icon: Code,
  //   href: "/code",
  //   color: "text-green-700",
  // },
  // {
  //   label: "Settings",
  //   icon: Settings,
  //   href: "/settings",
  // },
];

export const Sidebar = ({ user }: any) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-900 text-white border-r-4 border-sky-300">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-7">
          <div className="relative mr-4">
            <Image
              src="/logo_optima_pixel.svg"
              alt="optima pix"
              width={193}
              height={50}
            />
          </div>
        </Link>
        <div className="h-[1px] w-full bg-sky-900 space-y-1 mb-4"></div>
        <div>
          <LoggedButton user={user} />
        </div>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
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
