import React from "react";
import { AuthModal } from "@/components/modals/AuthModal.tsx";
import { AuthTypeEnum } from "@/types/auth.ts";

export const Login: React.FC = () => {
  return <AuthModal type={AuthTypeEnum.LOGIN} />;
};
