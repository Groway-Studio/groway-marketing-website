import styles from "./testimonials.module.scss";

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h2>
        Nuestros <span>Clientes dicen...</span>
      </h2>
      <div className={styles.testimonials__image}></div>
      <div className="row">
        <ul>
          <li>
            <h4>Shamira</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <h4>Luciana</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <h4>Alejandra</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <h4>Cristian</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
