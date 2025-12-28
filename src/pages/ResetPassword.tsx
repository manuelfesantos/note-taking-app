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
import { validatePassword } from "@/utils/input-validations.ts";

export const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState<
    string | undefined
  >();
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | undefined
  >();

  const handleResetPassword = () => {
    const [newNewPasswordError] = validatePassword(newPassword);
    const [newConfirmPasswordError] = validatePassword(confirmPassword);
    setNewPasswordError(newNewPasswordError);
    setConfirmPasswordError(newConfirmPasswordError);
    if (newNewPasswordError || newConfirmPasswordError) return;
    console.log("Handling reset password");
  };

  return (
    <AuthModal type={AuthTypeEnum.RESET_PASSWORD}>
      <AuthForm>
        <AuthFormInput
          type={FormInputTypeEnum.PASSWORD}
          label="New Password"
          value={newPassword}
          updateValue={setNewPassword}
          placeholder={""}
          name="newPassword"
          hintText="At least 8 characters"
          error={newPasswordError}
        />
        <AuthFormInput
          type={FormInputTypeEnum.PASSWORD}
          label="Confirm New Password"
          value={confirmPassword}
          updateValue={setConfirmPassword}
          placeholder=""
          name="confirmNewPassword"
          error={confirmPasswordError}
        />
        <Button
          variant={ButtonVariantEnum.PRIMARY}
          content="Reset Password"
          type={ButtonTypeEnum.BUTTON}
          onClick={handleResetPassword}
        />
      </AuthForm>
    </AuthModal>
  );
};
