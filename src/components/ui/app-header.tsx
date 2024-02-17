import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface AppHeaderProps {
  label: string;
}

import React from "react";

export const AppHeader = ({ label }: AppHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold text-center", font.className)}>
        Personal Finance Tracker
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
