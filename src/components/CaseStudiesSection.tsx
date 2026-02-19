import { FunctionComponent } from "react";
import CaseStudy from "./CaseStudy";
import styles from "./CaseStudiesSection.module.css";

export type CaseStudiesSectionType = {
  className?: string;
};

const CaseStudiesSection: FunctionComponent<CaseStudiesSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.caseStudiesSection, className].join(" ")}>
      <div className={styles.headingSubheading}>
        <div className={styles.headingSubheading2}>
          <div className={styles.label}>
            <h1 className={styles.label2}>Case Studies</h1>
          </div>
          <div className={styles.exploreRealLifeExamples}>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </div>
        </div>
      </div>
      <section className={styles.caseStudiesBlock}>
        <div className={styles.caseStudiesBlock2}>
          <div className={styles.caseStudies}>
            <CaseStudy forALocalRestaurantWeImplemen="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
            <div className={styles.caseStudiesColumn} />
            <CaseStudy forALocalRestaurantWeImplemen="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
            <div className={styles.caseStudiesColumn} />
            <CaseStudy forALocalRestaurantWeImplemen="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
          </div>
        </div>
      </section>
    </section>
  );
};

export default CaseStudiesSection;
