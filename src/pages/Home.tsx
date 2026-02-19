import { FunctionComponent } from "react";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import FooterBlock from "../components/FooterBlock";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <section className={styles.landingPage}>
        <NavigationBar />
        <Header />
        <div className={styles.logotypes}>
          <div className={styles.logotypesScroller}>
            <div className={styles.logotypesTrack}>
              <img className={styles.assetIcon} alt="" src="/Asset2@2x.png" />
              <img className={styles.assetIcon2} alt="" src="/Asset3@2x.png" />
              <img className={styles.assetIcon3} alt="" src="/Asset4@2x.png" />
              <img className={styles.assetIcon4} alt="" src="/Asset5@2x.png" />
              <img className={styles.assetIcon5} alt="" src="/Asset6@2x.png" />
              <img className={styles.assetIcon6} alt="" src="/Asset7@2x.png" />
              <img className={styles.assetIcon} alt="" src="/Asset2@2x.png" />
              <img className={styles.assetIcon2} alt="" src="/Asset3@2x.png" />
              <img className={styles.assetIcon3} alt="" src="/Asset4@2x.png" />
              <img className={styles.assetIcon4} alt="" src="/Asset5@2x.png" />
              <img className={styles.assetIcon5} alt="" src="/Asset6@2x.png" />
              <img className={styles.assetIcon6} alt="" src="/Asset7@2x.png" />
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <CaseStudiesSection />
      <div className={styles.headingSubheading}>
        <div className={styles.headingSubheading2}>
          <div className={styles.label}>
            <h2
              className={styles.ourWorkingProcess}
            >{`Our Working Process `}</h2>
          </div>
          <div className={styles.stepByStepGuideTo}>
            Step-by-Step Guide to Achieving Your Business Goals
          </div>
        </div>
      </div>
      <TeamSection />
      <div className={styles.headingSubheading3}>
        <div className={styles.headingSubheading4}>
          <button className={styles.label2}>
            <div className={styles.label3}>Testimonials</div>
          </button>
          <div className={styles.hearFromOur}>
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </div>
        </div>
      </div>
      <ContactSection />
      <FooterBlock />
    </div>
  );
};

export default Home;
