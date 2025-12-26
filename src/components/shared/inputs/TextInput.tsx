import type { TextInputType } from "@/types/input.ts";

import styles from "./TextInput.module.css";

interface Props {
  type: TextInputType;
  value: string;
  updateValue: (value: string) => void;
  placeholder: string;
  hintText?: string;
  error?: boolean;
  viewIcon?: boolean;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
  label: string;
  name: string;
}

export const TextInput: React.FC<Props> = ({
  type,
  value,
  updateValue,
  label,
  name,
  placeholder,
  hintText,
  error,
  viewIcon,
  showPassword,
  toggleShowPassword,
}) => {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => updateValue(e.target.value)}
        />
      </div>
      {hintText ? <p className={styles.hint}>{hintText}</p> : null}
    </>
  );
};
