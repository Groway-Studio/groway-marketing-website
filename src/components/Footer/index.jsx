import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="./src/assets/groway.svg" alt="Groway Studio" />
      <div>
        Escríbenos a: <a href="mailto:hola@groway.studio">hola@groway.studio</a>
        <img src="./src/assets/social-media/instagram.svg" alt="Instagram" />
        <img src="./src/assets/social-media/linkedin.svg" alt="Linkdein" />
        <img src="./src/assets/social-media/facebook.svg" alt="Facebook" />
      </div>
      <div>
        Perú
        <p>
          AV. El Derby 055 Edificio Cronos, Torre 1 Piso 7 Santiago de Surco
          Lima - Perú
        </p>
        <div>
          <div>
            EE.UU
            <a href="tel:+17867558193">+1 786 7558193</a>
          </div>
          <div>
            Argentina <a href="tel:+541152175854">+54 11 52175854</a>
          </div>
          <div>
            Colombia <a href="tel:+5715800311">+57 15 800311</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
