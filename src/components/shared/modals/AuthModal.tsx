import React, { type ReactNode } from "react";
import type { AuthType } from "@/types/auth.ts";
import { useUserContext } from "@/contexts/UserContext.tsx";
import { useNavigate } from "react-router-dom";
import { AuthTypeEnum } from "@/types/auth.ts";

import styles from "./AuthModal.module.css";

interface Props {
  type: AuthType;
  children: ReactNode | ReactNode[];
}

const authTypeConfig = (
  type: AuthType,
): {
  title: string;
  description: string;
} => {
  switch (type) {
    case AuthTypeEnum.LOGIN:
      return {
        title: "Welcome to Note",
        description: "Please log in to continue",
      };
    case AuthTypeEnum.SIGNUP:
      return {
        title: "Create Your Account",
        description:
          "Sign up to start organizing your notes and boost your productivity.",
      };
    case AuthTypeEnum.FORGOT_PASSWORD:
      return {
        title: "Forgotten your password?",
        description:
          "Enter your email below, and we’ll send you a link to reset it.",
      };
    case AuthTypeEnum.RESET_PASSWORD:
      return {
        title: "Reset Your Password",
        description: "Choose a new password to secure your account.",
      };
  }
};

export const AuthModal: React.FC<Props> = ({ type, children }) => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  if (user) {
    navigate("/");
    return null;
  }

  const { description, title } = authTypeConfig(type);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modalBody}>
        <img src="/images/logo.svg" alt="logo" />
        <div className={styles.modalHeader}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {children}
      </div>
    </div>
  );
};
