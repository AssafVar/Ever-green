import clsx from "clsx";
import styles from "./alert.module.css";

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === true,
        [styles.error]: type === false,
      })}
    >
      {children}
    </div>
  );
}