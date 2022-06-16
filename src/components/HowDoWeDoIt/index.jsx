import styles from "./how_do_we_do_it.module.scss";

const HowDoWeDoIt = () => {
  return (
    <section className={styles.howDoWeDoIt}>
      <div className={styles.howDoWeDoIt__graphic}>
        <img
          src="./src/assets/agile_marketing.svg"
          alt="How We Do It Picture"
          draggable={false}
        />
      </div>
      <div className={styles.howDoWeDoIt__content}>
        <h2>
          ¿Cómo lo <span>hacemos?</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          optio nesciunt odio corporis possimus suscipit recusandae cumque
          facilis ea fugiat.
        </p>
      </div>
    </section>
  );
};

export default HowDoWeDoIt;
