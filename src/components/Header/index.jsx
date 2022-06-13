import Navbar from "../Navbar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />

      <div className={styles.header__content}>
        <div className={styles.header__heroImage}></div>

        <div className={styles.header__description}>
          <h1 className={styles.header__description_mainTitle}>
            Todo se trata de usar la <span>estrategia correcta</span> en el{" "}
            <span>momento correcto</span>
          </h1>

          <button>Lorem ipsum</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
