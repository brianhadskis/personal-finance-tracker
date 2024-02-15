"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const LoginButton = ({ children, asChild }: LoginButtonProps) => {
  const onClick = () => {
    console.log("Login button clicked");
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
