"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { AppHeader } from "@/components/ui/app-header";
import { OAuthProviders } from "@/components/auth/oauth-providers";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/auth/back-button";

interface AuthCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showOAuthProviders?: boolean;
}

export const AuthCardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showOAuthProviders,
}: AuthCardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <AppHeader label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showOAuthProviders && (
        <CardFooter>
          <OAuthProviders />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
