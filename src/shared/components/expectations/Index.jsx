import styles from "./Index.module.css";

export default function Expectation({
  Icon,
  expectation,
  description,
  size,
  color,
  ...props
}) {
  return (
    <>
      <div className={styles.expectationCard}>
        <Icon size={size} color={color} />
        <div className={styles.expectationText}>
          <p>{expectation}</p>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
}
