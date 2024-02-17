import { AuthCardWrapper } from "@/components/auth/auth-card-wrapper";

export const LoginForm = () => {
  return (
    <AuthCardWrapper
      headerLabel="Login to continue"
      backButtonLabel="Don't have n account?"
      backButtonHref="/register"
      showOAuthProviders
    >
      Login Form
    </AuthCardWrapper>
  );
};
