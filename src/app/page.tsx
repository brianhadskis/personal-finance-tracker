import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-300 to-emerald-700">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          Personal Finance Tracker
        </h1>
        <p className="text-white text-lg">
          A simple, but powerful app for keeping track of your finances
        </p>
        <div>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </div>
      </div>
    </main>
  );
}
