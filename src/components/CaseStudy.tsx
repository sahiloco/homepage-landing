import { FunctionComponent } from "react";
import styles from "./CaseStudy.module.css";

export type CaseStudyType = {
  className?: string;
  forALocalRestaurantWeImplemen?: string;
};

const CaseStudy: FunctionComponent<CaseStudyType> = ({
  className = "",
  forALocalRestaurantWeImplemen,
}) => {
  return (
    <div className={[styles.caseStudy, className].join(" ")}>
      <div className={styles.forALocal}>{forALocalRestaurantWeImplemen}</div>
      <div className={styles.link}>
        <h3 className={styles.label}>Learn more</h3>
        <img className={styles.icon} alt="" src="/Icon2@2x.png" />
      </div>
    </div>
  );
};

export default CaseStudy;
