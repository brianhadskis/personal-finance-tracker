"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const OAuthProviders = () => {
  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <p className="mb-2 flex flex-row items-center gap-x-3 text-neutral-500 text-sm">
        <div className="h-[1px] w-[65px] bg-neutral-400" />
        OR
        <div className="h-[1px] w-[65px] bg-neutral-400" />
      </p>
      <Button
        size="lg"
        className="w-full gap-x-2 text-md font-semibold"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" /> Google
      </Button>
      <Button
        size="lg"
        className="w-full gap-x-2 text-md font-semibold"
        variant="outline"
        onClick={() => {}}
      >
        <FaGithub className="h-5 w-5" /> Github
      </Button>
    </div>
  );
};
