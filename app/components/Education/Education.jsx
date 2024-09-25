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
        logo: "distributed",
      },
      {
        name: "Enterprise Application Development",
        logo: "application",
      },
      {
        name: "Enterprise Software Platforms",
        logo: "software",
      },
      {
        name: "Software Systems Engineering",
        logo: "systems",
      },
      {
        name: "Software Security Technologies",
        logo: "security",
      },
      {
        name: "Data Mining",
        logo: "datamining",
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
        logo: "datastructures",
      },
      {
        name: "Database Management Systems",
        logo: "database",
      },
      {
        name: "Design and Analysis of Algorithms",
        logo: "algorithms",
      },
      {
        name: "Operating Systems",
        logo: "operatingsystem",
      },
      {
        name: "Object Oriented Analysis and Design",
        logo: "object",
      },
      {
        name: "Java and Internet Programming",
        logo: "java",
      },
      {
        name: "Data Communication and Computer Networks",
        logo: "networks",
      },
    ],
  },
];
