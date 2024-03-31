import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu.title";
import Link from "next/link";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export default function MainMenu({ className }: { className?: string }) {
  return (
    <nav className={cn(`bg-muted overflow-auto p-4 flex flex-col`)}>
      <header className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <div className="py-4 grow">
        <MenuItem herf="/dashboard">My Dashboard</MenuItem>
        <MenuItem herf="/dashboard/teams">Teams</MenuItem>
        <MenuItem herf="/dashboard/employees">Employees</MenuItem>
        <MenuItem herf="/dashboard/account">Account</MenuItem>
        <MenuItem herf="/dashboard/settings">Settings</MenuItem>
      </div>
      <footer className="flex jap-2 items-center">
        <Avatar className=" bg-pink-300 dark:bg-pink-800 ">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>TS</AvatarFallback>
        </Avatar>
        <Link href="/" className=" hover:underline px-2">
          logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
