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
            src={collegeLogo}
            width={50}
            height={50}
            className={styles.collegeLogo}
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
  return <div className={styles.pill}>{course}</div>;
};
