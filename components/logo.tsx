import Link from "next/link";
import { Poppins } from "next/font/google";
import { Film } from "lucide-react";

import { cn } from "@/lib/utils";

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Logo = () => {
  return (
    <Link href="/dashboard">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Film className="w-8 h-8" />
        <p className={cn("text-lg text-neutral-700", headingFont.className)}>
          Movie Dashboard
        </p>
      </div>
    </Link>
  );
};
