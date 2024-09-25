import { iconMap } from "@/public/images/icons/iconsMap";
import styles from "./EducationCard.module.css";
import Image from "next/image";

export function EducationCard({
  startDate,
  endDate,
  collegeName,
  collegeLogo,
  degree,
  course,
  coursework,
}) {
  return (
    <div className={styles.education}>
      <div className={styles.dateRange}>
        <div className={styles.dateDetails}>
          <span>{startDate}</span>
          <Dash />
          <span>{endDate}</span>
        </div>
      </div>
      <div className={styles.educationDetails}>
        <div className={styles.collegeDetails}>
          <div>
            <span className={styles.collegeName}>{collegeName}</span>
            <div className={styles.degreeDetails}>
              <span>{degree}</span>
              <Dot />
              <span>{course}</span>
            </div>
          </div>
          <Image
            src={collegeLogo.src}
            width={collegeLogo.width}
            height={collegeLogo.height}
            className={styles.collegeLogo}
            alt="education"
          />
        </div>
        <div className={styles.courseSection}>
          {coursework.map((v, index) => (
            <Pill key={index} course={v} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Dot = () => {
  return <div className={styles.dot}></div>;
};

const Dash = () => {
  return <div className={styles.dash}></div>;
};

const Pill = ({ course }) => {
  const IconComponent = iconMap[course.logo];

  return (
    <div className={styles.pill}>
      <IconComponent width={20} height={20} />
      {course.name}
    </div>
  );
};
