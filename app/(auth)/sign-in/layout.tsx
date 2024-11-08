import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (session?.user) return redirect("/dashboard");
  return <div>{children}</div>;
};

export default AuthLayout;
