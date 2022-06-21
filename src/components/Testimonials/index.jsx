import styles from "./testimonials.module.scss";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2>
        Nuestros <span>Clientes dicen...</span>
      </h2>
      <div className={styles.testimonials__content}>
        <div className={styles.testimonials__image}>
          <img
            src="./src/assets/testimonials.svg"
            alt="Testimonials"
            draggable={false}
          />
        </div>

        <ul className={styles.testimonials__comments}>
          <li className={styles.testimonials__comments_item}>
            <img src="./src/assets/comment_box/comment_1.svg" alt="Comment1" />
          </li>
          <li className={styles.testimonials__comments_item}>
            <img src="./src/assets/comment_box/comment_2.svg" alt="Comment2" />
          </li>
          <li className={styles.testimonials__comments_item}>
            <img src="./src/assets/comment_box/comment_3.svg" alt="Comment3" />
          </li>
          <li className={styles.testimonials__comments_item}>
            <img src="./src/assets/comment_box/comment_4.svg" alt="Comment4" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
