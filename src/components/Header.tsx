import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.header2}>
        <section className={styles.headerDetails}>
          <div className={styles.navigatingTheDigital}>
            Navigating the digital landscape for success
          </div>
          <div className={styles.ourDigitalMarketing}>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </div>
          <button className={styles.button}>
            <div className={styles.label}>Book a consultation</div>
          </button>
        </section>
        <img className={styles.assetIcon} alt="" src="/Asset1@2x.png" />
      </div>
    </div>
  );
};

export default Header;
