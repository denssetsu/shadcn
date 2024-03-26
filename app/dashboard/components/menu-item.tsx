"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type props = {
  children: React.ReactNode;
  herf: string;
};

export default function MenuItem({ children, herf }: props) {
  const pathname = usePathname();
  const isActive = pathname === herf;
  return (
    <Link
      className={twMerge(
        "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
        isActive &&
          "bg-primary hover:bg-primary dark:bg-primary hover:text-primary-foreground text-primary-foreground"
      )}
      href={herf}
    >
      {children}
    </Link>
  );
}
