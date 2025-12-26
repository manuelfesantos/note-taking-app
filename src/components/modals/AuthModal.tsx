import React, { ReactNode } from "react";
import type { AuthType } from "@/types/auth.ts";
import { useUserContext } from "@/contexts/UserContext.tsx";
import { useNavigate } from "react-router-dom";
import { AuthTypeEnum } from "@/types/auth.ts";

import styles from "./AuthModal.module.css";
import { LoginForm } from "@/components/forms/auth/LoginForm.tsx";
import { SignupForm } from "@/components/forms/auth/SignupForm.tsx";
import { ForgotPasswordForm } from "@/components/forms/auth/ForgotPasswordForm.tsx";
import { ResetPasswordForm } from "@/components/forms/auth/ResetPasswordForm.tsx";

interface Props {
  type: AuthType;
}

const authTypeToForm = (
  type: AuthType,
): {
  form: ReactNode;
  title: string;
  description: string;
} => {
  switch (type) {
    case AuthTypeEnum.LOGIN:
      return {
        form: <LoginForm />,
        title: "Welcome to Note",
        description: "Please log in to continue",
      };
    case AuthTypeEnum.SIGNUP:
      return {
        form: <SignupForm />,
        title: "Create Your Account",
        description:
          "Sign up to start organizing your notes and boost your productivity.",
      };
    case AuthTypeEnum.FORGOT_PASSWORD:
      return {
        form: <ForgotPasswordForm />,
        title: "Forgotten your password?",
        description:
          "Enter your email below, and we’ll send you a link to reset it.",
      };
    case AuthTypeEnum.RESET_PASSWORD:
      return {
        form: <ResetPasswordForm />,
        title: "Reset Your Password",
        description: "Choose a new password to secure your account.",
      };
  }
};

export const AuthModal: React.FC<Props> = ({ type }) => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  if (user) {
    navigate("/");
    return null;
  }

  const { form, description, title } = authTypeToForm(type);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modalBody}>
        <img src="/images/logo.svg" alt="logo" />
        <h1>{title}</h1>
        <p>{description}</p>
        {form}
      </div>
    </div>
  );
};
