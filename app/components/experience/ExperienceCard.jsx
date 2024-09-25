import { iconMap } from "@/public/images/icons/iconsMap";
import styles from "./ExperienceCard.module.css";
import Image from "next/image";

export function ExperienceCard({
  startDate,
  endDate,
  roleTitle,
  companyName,
  companyLogo,
  teamDetails,
  jobDetails,
  skills,
}) {
  return (
    <div className={styles.experience}>
      <div className={styles.dateRange}>
        <div className={styles.dateDetails}>
          <span>{startDate}</span>
          <Dash />
          <span>{endDate}</span>
        </div>
      </div>
      <div className={styles.experienceDetails}>
        <div className={styles.experienceWithLogo}>
          <div className={styles.roleDetails}>
            <span>{roleTitle}</span>
            <span className={styles.teamDetails}>{companyName}</span>
            <span className={styles.teamDetails}>{teamDetails}</span>
          </div>
          <Image
            src={companyLogo.src}
            width={companyLogo.width}
            height={companyLogo.height}
            className={styles.companyLogo}
            alt="companyLogo"
          />
        </div>
        <div className={styles.jobDetails}>
          <ul>
            {jobDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <Pill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Dash = () => {
  return <div className={styles.dash}></div>;
};

const Pill = ({ skill }) => {
  const IconComponent = iconMap[skill.logo];

  return (
    <div className={styles.pill}>
      {set.has(skill.name) ? (
        <Image src={skill.logo} width={20} height={20} alt="skillLogo" />
      ) : (
        <IconComponent
          src={skill.logo}
          width={20}
          height={20}
          style={{ fill: skill.color }}
        />
      )}

      {skill.name}
    </div>
  );
};

const set = new Set(["Aspose", "MATLAB"]);
