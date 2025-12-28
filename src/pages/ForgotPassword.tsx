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
import { AuthForm } from "@/components/shared/forms/AuthForm.tsx";
import { validateEmail } from "@/utils/input-validations.ts";

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>();

  const sendResetLink = () => {
    const [newEmailError] = validateEmail(email);
    setEmailError(newEmailError);
    if (newEmailError) return;
    console.log("sending reset link");
  };
  return (
    <AuthModal type={AuthTypeEnum.FORGOT_PASSWORD}>
      <AuthForm>
        <AuthFormInput
          type={FormInputTypeEnum.EMAIL}
          label="Email Address"
          value={email}
          updateValue={setEmail}
          placeholder={"email@example.com"}
          name={"email"}
          error={emailError}
        />
        <Button
          type={ButtonTypeEnum.BUTTON}
          variant={ButtonVariantEnum.PRIMARY}
          content="Send Reset Link"
          onClick={sendResetLink}
        />
      </AuthForm>
    </AuthModal>
  );
};
