import styles from "./InfoIcon.module.css";

interface Props {
  error?: boolean;
}

export const InfoIcon: React.FC<Props> = ({ error }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={`${styles.baseIcon} ${error ? styles.error : styles.icon}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063"
      />
    </svg>
  );
};
