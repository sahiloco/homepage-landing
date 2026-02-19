import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./ContactSection.module.css";

export type ContactSectionType = {
  className?: string;
};

const ContactSection: FunctionComponent<ContactSectionType> = ({
  className = "",
}) => {
  return (
    <main className={[styles.contactSection, className].join(" ")}>
      <div className={styles.headingSubheading}>
        <div className={styles.headingSubheading2}>
          <button className={styles.label}>
            <div className={styles.label2}>Contact Us</div>
          </button>
          <div className={styles.connectWithUs}>
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </div>
        </div>
      </div>
      <div className={styles.contactBlock}>
        <div className={styles.blockWithIllustration}>
          <div className={styles.form}>
            <div className={styles.radioButtons}>
              <div className={styles.sayHi}>
                <input className={styles.radiobutton} type="radio" />
                <div className={styles.sayHiWrapper}>
                  <div className={styles.sayHi2}>Say Hi</div>
                </div>
              </div>
              <div className={styles.getAQuote}>
                <input className={styles.radiobutton2} type="radio" />
                <div className={styles.sayHiWrapper}>
                  <div className={styles.getAQuote2}>Get a Quote</div>
                </div>
              </div>
            </div>
            <section className={styles.fields}>
              <div className={styles.field}>
                <div className={styles.name}>Name</div>
                <div className={styles.input}>
                  <input
                    className={styles.name2}
                    placeholder="Name"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.name}>Email*</div>
                <div className={styles.input}>
                  <input
                    className={styles.email2}
                    placeholder="Email"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.field3}>
                <div className={styles.name}>Message*</div>
                <div className={styles.input3}>
                  <div className={styles.message2}>Message</div>
                </div>
              </div>
            </section>
            <Button property1="Button primary" />
          </div>
          <img
            className={styles.illustrationIcon}
            loading="lazy"
            alt=""
            src="/Illustration@2x.png"
          />
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
