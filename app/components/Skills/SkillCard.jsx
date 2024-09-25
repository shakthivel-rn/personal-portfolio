import styles from "./SkillCard.module.css";
import { iconMap } from "../../../public/images/icons/iconsMap";

export const Card = ({ title, description, imgSrc }) => {
  const IconComponent = iconMap[imgSrc];

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <IconComponent src={imgSrc} width={50} height={50} />
      </div>
      <div className={styles.cardDetails}>
        <span className={styles.cardTitle}>{title}</span>
        <span className={styles.cardDescription}>{description}</span>
      </div>
    </div>
  );
};
