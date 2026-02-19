import { FunctionComponent } from "react";
import styles from "./FooterBlock.module.css";

export type FooterBlockType = {
  className?: string;
};

const FooterBlock: FunctionComponent<FooterBlockType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.footerBlock, className].join(" ")}>
      <footer className={styles.footer}>
        <div className={styles.navigationAndContacts}>
          <div className={styles.elements}>
            <img className={styles.assetIcon} alt="" src="/Asset14@2x.png" />
            <div className={styles.navigation}>
              <div className={styles.aboutUs}>About us</div>
              <div className={styles.aboutUs}>Services</div>
              <div className={styles.aboutUs}>Use Cases</div>
              <div className={styles.aboutUs}>Pricing</div>
              <div className={styles.aboutUs}>Blog</div>
            </div>
            <div className={styles.socialIcons}>
              <img
                className={styles.socialIcon}
                alt=""
                src="/Social-icon1@2x.png"
              />
              <img
                className={styles.socialIcon}
                alt=""
                src="/Social-icon2@2x.png"
              />
              <img
                className={styles.socialIcon}
                alt=""
                src="/Social-icon3@2x.png"
              />
            </div>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactUs}>
              <div className={styles.label}>
                <h3 className={styles.label2}>Contact us:</h3>
              </div>
              <div className={styles.info}>
                <div className={styles.emailInfopositivuscom}>
                  Email: info@positivus.com
                </div>
                <div className={styles.emailInfopositivuscom}>
                  Phone: 555-567-8901
                </div>
                <div className={styles.address1234Main}>
                  Address: 1234 Main St
                  <br />
                  Moonstone City, Stardust State 12345
                </div>
              </div>
            </div>
            <div className={styles.subscriptionBlock}>
              <div className={styles.field}>
                <input
                  className={styles.email}
                  placeholder="Email"
                  type="text"
                />
              </div>
              <button className={styles.button}>
                <div className={styles.label3}>Subscribe to news</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.lineAndText}>
          <div className={styles.footerDivider} />
          <div className={styles.text}>
            <div className={styles.positivusAllRights}>
              © 2023 Positivus. All Rights Reserved.
            </div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterBlock;
