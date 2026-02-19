import { FunctionComponent, useState } from "react";
import styles from "./NavigationBar.module.css";

export type NavigationBarType = {
  className?: string;
};

const NavigationBar: FunctionComponent<NavigationBarType> = ({
  className = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={[styles.navigationBar, className].join(" ")}>
      <img
        className={styles.assetIcon}
        loading="lazy"
        alt=""
        src="/Asset@2x.png"
      />
      <div className={styles.navbarLinks}>
        <h3 className={styles.aboutUs}>About us</h3>
        <h3 className={styles.aboutUs}>Services</h3>
        <h3 className={styles.aboutUs}>Use Cases</h3>
        <h3 className={styles.aboutUs}>Pricing</h3>
        <h3 className={styles.aboutUs}>Blog</h3>
        <button className={styles.button}>
          <div className={styles.label}>Request a quote</div>
        </button>
      </div>
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen1 : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen2 : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen3 : ''}`}></span>
      </button>
      {isMenuOpen && (
        <>
          <div className={styles.overlay} onClick={toggleMenu}></div>
          <div className={`${styles.mobileMenu} ${styles.mobileMenuOpen}`}>
        <h3 className={styles.mobileMenuItem}>About us</h3>
        <h3 className={styles.mobileMenuItem}>Services</h3>
        <h3 className={styles.mobileMenuItem}>Use Cases</h3>
        <h3 className={styles.mobileMenuItem}>Pricing</h3>
        <h3 className={styles.mobileMenuItem}>Blog</h3>
        <button className={styles.mobileButton}>
          <div className={styles.label}>Request a quote</div>
        </button>
          </div>
        </>
      )}
    </header>
  );
};

export default NavigationBar;
