import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="logo">groway.studio</div>
      <ul className={styles.navbar__options}>
        <li className={styles.navbar__options_item}>
          <a href="#">Inicio</a>
        </li>
        <li className={styles.navbar__options_item}>
          <a href="#">Servicios</a>
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
