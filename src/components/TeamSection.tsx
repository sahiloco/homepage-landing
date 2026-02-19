import { FunctionComponent } from "react";
import Card1 from "./Card1";
import styles from "./TeamSection.module.css";

export type TeamSectionType = {
  className?: string;
};

const TeamSection: FunctionComponent<TeamSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.teamSection, className].join(" ")}>
      <div className={styles.headingSubheading}>
        <div className={styles.headingSubheading2}>
          <button className={styles.label}>
            <div className={styles.team}>Team</div>
          </button>
          <div className={styles.meetTheSkilled}>
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </div>
        </div>
      </div>
      <section className={styles.row}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.person}>
              <div className={styles.pictureAndName}>
                <img
                  className={styles.assetIcon}
                  alt=""
                  src="/Asset11@2x.png"
                />
                <div className={styles.name}>
                  <h3 className={styles.johnSmith}>John Smith</h3>
                  <div className={styles.ceoAndFounder}>CEO and Founder</div>
                </div>
              </div>
              <img
                className={styles.socialIcon}
                alt=""
                src="/Social-icon@2x.png"
              />
            </div>
            <div className={styles.profileSeparator} />
            <div className={styles.yearsOfExperience}>
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy
            </div>
          </div>
        </div>
        <Card1
          asset="/Asset12@2x.png"
          janeDoe="Jane Doe"
          directorOfOperations="Director of Operations"
          yearsOfExperienceInProject="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        />
        <Card1
          asset="/Asset13@2x.png"
          janeDoe="Michael Brown"
          directorOfOperations="Senior SEO Specialist"
          yearsOfExperienceInProject="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          nameAlignItems="flex-start"
          nameGap="unset"
        />
      </section>
      <button className={styles.button}>
        <div className={styles.label2}>See all team</div>
      </button>
    </section>
  );
};

export default TeamSection;
