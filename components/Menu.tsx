"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MessageIcon, TaskIcon } from "./icons";
import { cn } from "@/lib/utils";

export const Menu = () => {
  const pathName = usePathname();

  return (
    <div className="flex gap-3 absolute bottom-0 right-0 p-5 px-10">
      <Link href={pathName === "/inbox" ? "/task" : "/inbox"}>
        <div
          className={cn(
            "flex items-center justify-center w-16 h-16 rounded-full",
            pathName === "/inbox" ? "bg-gray6" : "bg-indicator"
          )}
        >
          {pathName === "/inbox" ? <TaskIcon /> : <MessageIcon />}
        </div>
      </Link>
      <div className="relative flex">
        <div
          className={cn(
            "absolute left-4 flex items-center justify-center w-16 h-16 rounded-full",
            pathName === "/inbox" ? "bg-indicator" : "bg-gray6"
          )}
        >
          {pathName === "/inbox" ? <MessageIcon /> : <TaskIcon />}
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-gray2 rounded-full"></div>
      </div>
    </div>
  );
};
