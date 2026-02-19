import { FunctionComponent, useState } from "react";
import Card from "./Card";
import styles from "./ServicesSection.module.css";

export type ServicesSectionType = {
  className?: string;
};

const ServicesSection: FunctionComponent<ServicesSectionType> = ({
  className = "",
}) => {
  const [cardItems] = useState([
    {
      label: "Social Media",
      label1: "Marketing",
      icon: "/Icon@2x.png",
      asset: "/Asset8@2x.png",
      cardBackgroundColor: "#191a23" as const,
      cardAlignItems: "flex-start" as const,
      cardAlignContent: "flex-start" as const,
      labelBackgroundColor: "#fff" as const,
      labelBackgroundColor1: "#fff" as const,
      labelColor: "#fff" as const,
      assetIconHeight: "210px" as const,
    },
    {
      label: "Email",
      label1: "Marketing",
      icon: "/Icon1@2x.png",
      asset: "/tokyo-sending-messages-from-one-place-to-another-1@2x.png",
      cardBackgroundColor: "#f3f3f3" as const,
      cardAlignItems: "center" as const,
      cardAlignContent: "center" as const,
      labelBackgroundColor: "#b9ff66" as const,
      labelBackgroundColor1: "#b9ff66" as const,
      labelColor: "#000" as const,
      assetIconHeight: "192.7px" as const,
    },
    {
      label: "Content",
      label1: "Creation",
      icon: "/Icon1@2x.png",
      asset: "/Asset9@2x.png",
      cardBackgroundColor: "#b9ff66" as const,
      cardAlignItems: "center" as const,
      cardAlignContent: "center" as const,
      labelBackgroundColor: undefined,
      labelBackgroundColor1: undefined,
      labelColor: "#000" as const,
      assetIconHeight: "195.9px" as const,
    },
    {
      label: "Analytics and ",
      label1: "Tracking",
      icon: "/Icon@2x.png",
      asset: "/Asset10@2x.png",
      cardBackgroundColor: undefined,
      cardAlignItems: "center" as const,
      cardAlignContent: "center" as const,
      labelBackgroundColor: "#b9ff66" as const,
      labelBackgroundColor1: "#b9ff66" as const,
      labelColor: undefined,
      assetIconHeight: "170px" as const,
    },
  ]);
  return (
    <section className={[styles.servicesSection, className].join(" ")}>
      <div className={styles.headingSubheading}>
        <div className={styles.headingSubheading2}>
          <button className={styles.label}>
            <div className={styles.label2}>Services</div>
          </button>
          <div className={styles.atOurDigital}>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </div>
        </div>
      </div>
      <div className={styles.servicesBlock}>
        {cardItems.map((item, index) => (
          <Card
            key={index}
            label={item.label}
            label1={item.label1}
            icon={item.icon}
            asset={item.asset}
            cardBackgroundColor={item.cardBackgroundColor}
            cardAlignItems={item.cardAlignItems}
            cardAlignContent={item.cardAlignContent}
            labelBackgroundColor={item.labelBackgroundColor}
            labelBackgroundColor1={item.labelBackgroundColor1}
            labelColor={item.labelColor}
            assetIconHeight={item.assetIconHeight}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
