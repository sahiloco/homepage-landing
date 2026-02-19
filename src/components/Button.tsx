import { FunctionComponent, type CSSProperties } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  property1 = "Button primary",
}) => {
  return (
    <button
      className={[styles.button, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.label}>Send Message</div>
    </button>
  );
};

export default Button;
