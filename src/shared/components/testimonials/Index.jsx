import styles from "./Index.module.css";
import Star2 from "@assets/icons/Star2.jsx";

export default function Testimonials({ img, review, name, job, ...props }) {
  return (
    <>
      <div className={styles.testimonialCard}>
        <div className={styles.avatarWrapper}>
          {img && (
            <img src={img} alt={`${name}'s photo`} className={styles.avatar} />
          )}
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.name}>{name}</p>
          <p className={styles.job}>{job}</p>

          <p>{review}</p>
        </div>
      </div>
    </>
  );
}
