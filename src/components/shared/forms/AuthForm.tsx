import React, { type ReactNode } from "react";
import styles from "./AuthForm.module.css";

interface Props {
  children: ReactNode | ReactNode[];
}

export const AuthForm: React.FC<Props> = ({ children }) => {
  return <form className={styles.form}>{children}</form>;
};
