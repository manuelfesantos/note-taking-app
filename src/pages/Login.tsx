import React, { useState } from "react";
import { AuthModal } from "@/components/shared/modals/AuthModal.tsx";
import { AuthTypeEnum } from "@/types/auth.ts";
import { AuthFormInput } from "@/components/shared/inputs/AuthFormInput.tsx";
import {
  ButtonTypeEnum,
  ButtonVariantEnum,
  FormInputTypeEnum,
} from "@/types/form.ts";
import { Button } from "@/components/shared/buttons/Button.tsx";
import { FormSpacer } from "@/components/shared/spacers/FormSpacer.tsx";
import { GoogleButton } from "@/components/shared/buttons/GoogleButton.tsx";
import styles from "@/components/shared/forms/AuthForm.module.css";
import { AuthForm } from "@/components/shared/forms/AuthForm.tsx";
import { validateEmail, validatePassword } from "@/utils/input-validations.ts";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const handleLogin = () => {
    const [newPasswordError] = validatePassword(password);
    const [newEmailError] = validateEmail(email);
    setEmailError(newEmailError);
    setPasswordError(newPasswordError);

    if (newEmailError || newPasswordError) {
      return;
    }

    console.log("logging in");
  };

  return (
    <AuthModal type={AuthTypeEnum.LOGIN}>
      <AuthForm>
        <AuthFormInput
          type={FormInputTypeEnum.EMAIL}
          value={email}
          updateValue={setEmail}
          placeholder={"email@example.com"}
          label={"Email Address"}
          name={"email"}
          error={emailError}
        />
        <AuthFormInput
          type={FormInputTypeEnum.PASSWORD}
          value={password}
          updateValue={setPassword}
          placeholder={""}
          label={"Password"}
          name={"password"}
          error={passwordError}
        />
        <Button
          variant={ButtonVariantEnum.PRIMARY}
          content="Login"
          type={ButtonTypeEnum.BUTTON}
          onClick={handleLogin}
        />
        <FormSpacer />
        <p>Or log in with:</p>
        <GoogleButton />
        <FormSpacer />
        <div className={styles.footerLink}>
          <span>No account yet?</span>
          <a href="/signup">Sign Up</a>
        </div>
      </AuthForm>
    </AuthModal>
  );
};
