import styles from "./Index.module.css";

export default function Button({ children, variant, size, ...props }) {
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
