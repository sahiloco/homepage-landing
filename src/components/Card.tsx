import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
  label?: string;
  label1?: string;
  icon?: string;
  asset?: string;

  /** Style props */
  cardBackgroundColor?: CSSProperties["backgroundColor"];
  cardAlignItems?: CSSProperties["alignItems"];
  cardAlignContent?: CSSProperties["alignContent"];
  labelBackgroundColor?: CSSProperties["backgroundColor"];
  labelBackgroundColor1?: CSSProperties["backgroundColor"];
  labelColor?: CSSProperties["color"];
  assetIconHeight?: CSSProperties["height"];
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  label,
  label1,
  icon,
  asset,
  cardBackgroundColor,
  cardAlignItems,
  cardAlignContent,
  labelBackgroundColor,
  labelBackgroundColor1,
  labelColor,
  assetIconHeight,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: cardBackgroundColor,
      alignItems: cardAlignItems,
      alignContent: cardAlignContent,
    };
  }, [cardBackgroundColor, cardAlignItems, cardAlignContent]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: labelBackgroundColor,
    };
  }, [labelBackgroundColor]);

  const label1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: labelBackgroundColor1,
    };
  }, [labelBackgroundColor1]);

  const label2Style: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  const assetIconStyle: CSSProperties = useMemo(() => {
    return {
      height: assetIconHeight,
    };
  }, [assetIconHeight]);

  return (
    <section className={[styles.card, className].join(" ")} style={cardStyle}>
      <div className={styles.headingAndLink}>
        <div className={styles.heading}>
          <div className={styles.label} style={labelStyle}>
            <h2 className={styles.label2}>{label}</h2>
          </div>
          <div className={styles.label} style={label1Style}>
            <h2 className={styles.label4}>{label1}</h2>
          </div>
        </div>
        <button className={styles.link}>
          <img className={styles.icon} alt="" src={icon} />
          <h3 className={styles.label5} style={label2Style}>
            Learn more
          </h3>
        </button>
      </div>
      <img
        className={styles.assetIcon}
        alt=""
        src={asset}
        style={assetIconStyle}
      />
    </section>
  );
};

export default Card;
