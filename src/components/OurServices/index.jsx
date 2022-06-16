import styles from "./our_services.module.scss";

const OurServices = () => {
  return (
    <section className={styles.ourServices} id="servicios">
      <h2>
        Nuestros <span>Servicios</span>
      </h2>

      <div className={styles.cards_container}>
        <div className={styles.ourServices__card_item}>
          <img
            src="./src/assets/marketing.svg"
            alt="Marketing Digital"
            draggable={false}
          />

          <h3>Marketing Digital</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nam,
            facilis dicta, excepturi perspiciatis.
          </p>
        </div>
        <div className={styles.ourServices__card_item}>
          <img
            src="./src/assets/advertising.svg"
            alt="Publicidad"
            draggable={false}
          />
          <h3>Publicidad</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nam,
            facilis dicta, excepturi perspiciatis.
          </p>
        </div>
        <div className={styles.ourServices__card_item}>
          <img
            src="./src/assets/influencer.svg"
            alt="Creación de contenido"
            draggable={false}
          />

          <h3>Creación de contenido</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nam,
            facilis dicta, excepturi perspiciatis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
