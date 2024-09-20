import { EducationCard } from "./EducationCard";
import styles from "../Components.module.css";

export function Education() {
  return (
    <div className={styles.section}>
      <span className={styles.title}>Education</span>
      {education.map(
        (
          {
            startDate,
            endDate,
            collegeName,
            collegeLogo,
            degree,
            course,
            coursework,
          },
          index
        ) => (
          <EducationCard
            key={index}
            startDate={startDate}
            endDate={endDate}
            collegeName={collegeName}
            collegeLogo={collegeLogo}
            degree={degree}
            course={course}
            coursework={coursework}
          />
        )
      )}
    </div>
  );
}

const education = [
  {
    startDate: "2021",
    endDate: "2022",
    collegeName: "San Jose State University",
    collegeLogo: "/images/sjsu.png",
    degree: "Master of Science",
    course: "Software Engineering",
    coursework: [
      "Enterprise Distributed Systems",
      "Enterprise Application Development",
      "Enterprise Software Platforms",
      "Software Systems Engineering",
      "Software Security Technologies",
      "Data Mining",
    ],
  },
  {
    startDate: "2013",
    endDate: "2017",
    collegeName: "College of Engineering, Guindy",
    collegeLogo: "/images/ceg.png",
    degree: "Bachelor of Engineering",
    course: "Computer Science",
    coursework: [
      "Data Structures",
      "Database Management Systems",
      "Design and Analysis of Algorithms",
      "Operating Systems",
      "Object Oriented Analysis and Design",
      "Java and Internet Programming",
      "Data Communication and Computer Networks",
    ],
  },
];
