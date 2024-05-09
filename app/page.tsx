import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-300/80">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow-md text-black",
            font.className
          )}
        >
          Movie Dash
        </h1>
        <p className="text-black text-lg">
          A simple dashboard with movies info
        </p>
        <div>
          <LoginButton asChild>
            <Button size="lg">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
