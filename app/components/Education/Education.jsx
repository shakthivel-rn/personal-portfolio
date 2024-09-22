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
    collegeLogo: { src: "/images/sjsu.png", width: 50, height: 50 },
    degree: "Master of Science",
    course: "Software Engineering",
    coursework: [
      {
        name: "Enterprise Distributed Systems",
        logo: "/images/college/distributed.png",
      },
      {
        name: "Enterprise Application Development",
        logo: "/images/college/application.png",
      },
      {
        name: "Enterprise Software Platforms",
        logo: "/images/college/software.png",
      },
      {
        name: "Software Systems Engineering",
        logo: "/images/college/systems.png",
      },
      {
        name: "Software Security Technologies",
        logo: "/images/college/security.png",
      },
      {
        name: "Data Mining",
        logo: "/images/college/datamining.png",
      },
    ],
  },
  {
    startDate: "2013",
    endDate: "2017",
    collegeName: "College of Engineering, Guindy",
    collegeLogo: { src: "/images/ceg.jpg", width: 70, height: 55 },
    degree: "Bachelor of Engineering",
    course: "Computer Science",
    coursework: [
      {
        name: "Data Structures",
        logo: "/images/college/datastructures.png",
      },
      {
        name: "Database Management Systems",
        logo: "/images/college/database.png",
      },
      {
        name: "Design and Analysis of Algorithms",
        logo: "/images/college/algorithms.png",
      },
      {
        name: "Operating Systems",
        logo: "/images/college/operatingsystem.png",
      },
      {
        name: "Object Oriented Analysis and Design",
        logo: "/images/college/object.png",
      },
      {
        name: "Java and Internet Programming",
        logo: "/images/skills/java.png",
      },
      {
        name: "Data Communication and Computer Networks",
        logo: "/images/college/networks.png",
      },
    ],
  },
];
