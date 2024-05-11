"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white flex justify-between items-center p-4 rounded-b-xl w-full shadow-md">
      <Logo />
      <div className="flex gap-x-4">
        <Button
          asChild
          variant="ghost"
          className="text-slate-800 hover:bg-slate-200 rounded-full p-2 transition-colors"
        >
          <Link href="/dashboard/settings">
            <Settings className="w-5 h-5" />
          </Link>
        </Button>
        <UserButton />
      </div>
    </nav>
  );
};
