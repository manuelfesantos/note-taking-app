import React, { type ReactNode } from "react";
import type { ButtonType, ButtonVariant } from "@/types/form.ts";
import styles from "./Button.module.css";

interface Props {
  variant: ButtonVariant;
  content: string | ReactNode;
  onClick?: () => void;
  type: ButtonType;
}

export const Button: React.FC<Props> = ({
  variant,
  content,
  onClick,
  type,
}) => {
  return (
    <button
      className={`${styles[variant]} ${styles.btn}`}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
};
