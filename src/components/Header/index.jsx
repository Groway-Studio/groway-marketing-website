import Navbar from "../Navbar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />

      <div>
        <div className="row">Imagen</div>

        <div className="row">
          <h1>
            Todo se trata de usar la estrategia correcta en el momento correcto
          </h1>

          <button>Lorem ipsum</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
