import type { TextInputType } from "@/types/form.ts";
import styles from "./AuthFormInput.module.css";
import { FormInputTypeEnum } from "@/types/form.ts";
import React, { useState } from "react";
import { InfoIcon } from "@/components/shared/icons/InfoIcon.tsx";
import { ShowPasswordIcon } from "@/components/shared/icons/ShowPasswordIcon.tsx";
import { HidePasswordIcon } from "@/components/shared/icons/HidePasswordIcon.tsx";

interface InputProps {
  value: string;
  updateValue: (value: string) => void;
  placeholder: string;
  error?: string;
  name: string;
}

interface Props extends InputProps {
  type: TextInputType;
  hintText?: string;
  label: string;
}

type Input = React.FC<InputProps>;

const getInput = (props: Props) => {
  switch (props.type) {
    case FormInputTypeEnum.TEXT:
      return <TextInput {...props} />;
    case FormInputTypeEnum.EMAIL:
      return <EmailInput {...props} />;
    case FormInputTypeEnum.PASSWORD:
      return <PasswordInput {...props} />;
  }
};

export const AuthFormInput: React.FC<Props> = (props) => {
  return (
    <div className={styles.formInputDiv}>
      <label htmlFor={props.name} className={styles.label}>
        {props.label}
      </label>
      <div className={styles.inputWrapper}>{getInput(props)}</div>
      {props.hintText || props.error ? (
        <span className={styles.hint}>
          <InfoIcon error={!!props.error} />
          <span className={props.error ? styles.error : styles.hintText}>
            {props.error ?? props.hintText}
          </span>
        </span>
      ) : null}
    </div>
  );
};

const TextInput: Input = ({ name, updateValue, value, placeholder, error }) => {
  return (
    <input
      className={`${styles.input} ${error ? styles.inputError : ""}`}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => updateValue(e.target.value)}
    />
  );
};

const PasswordInput: Input = ({
  value,
  placeholder,
  updateValue,
  name,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((state) => !state);
  return (
    <>
      <input
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        name={name}
        type={
          showPassword ? FormInputTypeEnum.TEXT : FormInputTypeEnum.PASSWORD
        }
        value={value}
        placeholder={placeholder}
        onChange={(e) => updateValue(e.target.value)}
      />
      <div className={styles.viewIcon} onClick={toggleShowPassword}>
        {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
      </div>
    </>
  );
};

const EmailInput: Input = ({
  placeholder,
  name,
  value,
  updateValue,
  error,
}) => {
  return (
    <input
      className={`${styles.input} ${error ? styles.inputError : ""}`}
      name={name}
      value={value}
      onChange={(e) => updateValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};
