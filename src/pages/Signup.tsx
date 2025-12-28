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

export const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();

  const handleSignup = () => {
    const [newEmailError] = validateEmail(email);
    const [newPasswordError] = validatePassword(password);
    setEmailError(newEmailError);
    setPasswordError(newPasswordError);
    if (newEmailError || newPasswordError) return;

    console.log("handling signup");
  };

  return (
    <AuthModal type={AuthTypeEnum.SIGNUP}>
      <AuthForm>
        <AuthFormInput
          type={FormInputTypeEnum.EMAIL}
          label={"Email Address"}
          value={email}
          updateValue={setEmail}
          placeholder={"email@example.com"}
          name={"email"}
          error={emailError}
        />
        <AuthFormInput
          type={FormInputTypeEnum.PASSWORD}
          label={"Password"}
          value={password}
          updateValue={setPassword}
          placeholder={""}
          name={"password"}
          hintText={"At least 8 characters"}
          error={passwordError}
        />
        <Button
          variant={ButtonVariantEnum.PRIMARY}
          content="Sign up"
          type={ButtonTypeEnum.BUTTON}
          onClick={handleSignup}
        />
        <FormSpacer />
        <p>Or log in with:</p>
        <GoogleButton />
        <FormSpacer />
        <div className={styles.footerLink}>
          <span>Already have an account?</span>
          <a href="/login">Login</a>
        </div>
      </AuthForm>
    </AuthModal>
  );
};
