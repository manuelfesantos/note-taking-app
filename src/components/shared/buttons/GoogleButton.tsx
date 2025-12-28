import React from "react";
import { Button } from "@/components/shared/buttons/Button.tsx";
import { ButtonTypeEnum, ButtonVariantEnum } from "@/types/form.ts";
import styles from "./GoogleButton.module.css";

export const GoogleButton: React.FC = () => {
  const handleClick = () => {
    console.log("signing in with google");
  };
  return (
    <Button
      content={<GoogleButtonContent />}
      variant={ButtonVariantEnum.BORDER}
      onClick={handleClick}
      type={ButtonTypeEnum.BUTTON}
    ></Button>
  );
};

const GoogleButtonContent: React.FC = () => {
  return (
    <div className={styles.contentWrapper}>
      <img src="/images/icon-google.svg" alt="Google logo" />
      <span>Google</span>
    </div>
  );
};
