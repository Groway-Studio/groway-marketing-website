import styles from "./why_choose_us.module.scss";

const WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseUs}>
      <div className={styles.whyChooseUs__content}>
        <h2>
          ¿Por qué <span>elegirnos?</span>
        </h2>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <ul className={styles.WhyChooseUs__advantages}>
          <li>Lorem ipsum tus</li>
          <li>Lorem ipsum tus</li>
          <li>Lorem ipsum tus</li>
          <li>Lorem ipsum tus</li>
        </ul>
      </div>
      <div className={styles.whyChooseUs__graphic}></div>
    </div>
  );
};

export default WhyChooseUs;
