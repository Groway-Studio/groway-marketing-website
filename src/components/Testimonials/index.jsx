import styles from "./testimonials.module.scss";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2>
        Nuestros <span>Clientes dicen...</span>
      </h2>
      <div className={styles.testimonials__content}>
        <div className={styles.testimonials__image}></div>

        <ul className={styles.testimonials__comments}>
          <li className={styles.testimonials__comments_item}>
            <h4>Shamira</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li className={styles.testimonials__comments_item}>
            <h4>Luciana</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li className={styles.testimonials__comments_item}>
            <h4>Alejandra</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li className={styles.testimonials__comments_item}>
            <h4>Cristian</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
