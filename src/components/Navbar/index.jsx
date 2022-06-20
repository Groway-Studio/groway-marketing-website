import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className={styles.navbar__burger_menu}>
        <div className={styles.navbar__burger_line}></div>
        <div className={styles.navbar__burger_line}></div>
        <div className={styles.navbar__burger_line}></div>
      </label>

      <div className={styles.navbar__logo}>
        <img
          src="./src/assets/groway.svg"
          alt="Groway Studio"
          draggable={false}
        />
      </div>
      <ul className={styles.navbar__options}>
        <li className={styles.navbar__options_item}>
          <a href="#">Inicio</a>
        </li>
        <li className={styles.navbar__options_item}>
          <a href="#servicios">Servicios</a>
        </li>
        <li className={styles.navbar__options_item}>
          <a href="#">¿Quiénes Somos?</a>
        </li>
        <li className={styles.navbar__options_item}>
          <a href="#">Contáctanos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
