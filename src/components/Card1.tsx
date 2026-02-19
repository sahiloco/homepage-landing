import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card1.module.css";

export type Card1Type = {
  className?: string;
  asset?: string;
  janeDoe?: string;
  directorOfOperations?: string;
  yearsOfExperienceInProject?: string;

  /** Style props */
  nameAlignItems?: CSSProperties["alignItems"];
  nameGap?: CSSProperties["gap"];
};

const Card1: FunctionComponent<Card1Type> = ({
  className = "",
  asset,
  janeDoe,
  directorOfOperations,
  yearsOfExperienceInProject,
  nameAlignItems,
  nameGap,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: nameAlignItems,
      gap: nameGap,
    };
  }, [nameAlignItems, nameGap]);

  return (
    <div className={[styles.card, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.person}>
          <img className={styles.assetIcon} alt="" src={asset} />
          <div className={styles.personColumn1}>
            <img
              className={styles.socialIcon}
              alt=""
              src="/Social-icon@2x.png"
            />
            <div className={styles.name} style={nameStyle}>
              <h3 className={styles.janeDoe}>{janeDoe}</h3>
              <div className={styles.directorOfOperations}>
                {directorOfOperations}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentChild} />
        <div className={styles.yearsOfExperience}>
          {yearsOfExperienceInProject}
        </div>
      </div>
    </div>
  );
};

export default Card1;
