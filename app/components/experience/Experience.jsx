import { ExperienceCard } from "./ExperienceCard";
import styles from "../Components.module.css";

export function Experience() {
  return (
    <div className={styles.section} style={{ paddingTop: "0px" }}>
      <span className={styles.title}>Experience</span>
      {experience.map(
        (
          {
            startDate,
            endDate,
            roleTitle,
            companyName,
            companyLogo,
            teamDetails,
            jobDetails,
            skills,
          },
          index
        ) => (
          <ExperienceCard
            key={index}
            startDate={startDate}
            endDate={endDate}
            roleTitle={roleTitle}
            companyName={companyName}
            companyLogo={companyLogo}
            teamDetails={teamDetails}
            jobDetails={jobDetails}
            skills={skills}
          />
        )
      )}
    </div>
  );
}

const experience = [
  {
    startDate: "2023",
    endDate: "Present",
    roleTitle: " Software Engineer",
    companyLogo: { src: "/images/iheartmedia.png", width: 100, height: 80 },
    companyName: " iHeartMedia, Inc.",
    teamDetails:
      "Song Category & Attribute Management, Music Lab & AI Music Scheduling",
    jobDetails: [
      "Developed and maintained high-quality solutions for Music Lab and AI Music Scheduler using Python and Typescript, ensuring efficient and error-free operation",
      "Took ownership of user management services, integrating AI Music Scheduler to streamline user onboarding and enhance security",
      "By creating reusable React components shared between both applications, I reduced development efforts and ensured UI/UX consistency",
      "Transitioning from deeply nested props to Recoil state improved code readability and reduced re-render times by 32% (~50ms improvement)",
      "Additionally, I re-architected the user preferences table in DynamoDB, reducing query latency by 52% (from 100ms to 48ms)",
      "Migrated the legacy JavaScript codebase to TypeScript, enhancing type safety and minimizing errors",
    ],
    skills: [
      { name: "TypeScript", logo: "/images/skills/typescript.png" },
      { name: "JavaScript", logo: "/images/skills/js.png" },
      { name: "Node.js", logo: "/images/skills/nodejs.png" },
      { name: "React", logo: "/images/skills/react.png" },
      { name: "Recoil", logo: "/images/skills/recoil.png" },
      { name: "Python", logo: "/images/skills/python.png" },
      { name: "AWS", logo: "/images/skills/aws.png" },
      { name: "SQL", logo: "/images/skills/sql.png" },
      { name: "Postgres", logo: "/images/skills/postgres.png" },
    ],
  },
  {
    startDate: "2022",
    endDate: "2023",
    roleTitle: "Software Development Intern",
    companyLogo: { src: "/images/iheartmedia.png", width: 100, height: 80 },
    companyName: "iHeartMedia, Inc.",
    teamDetails: "User Management, Music Lab",
    jobDetails: [
      "I created complex queries in AWS DynamoDB, reducing query latency by 80% (500ms to 100ms) using Global Secondary Indexes",
      "Built and optimized GraphQL APIs in Node.js, cutting API response time by 50% (850ms to 425ms) using batch data loading, and deployed them via AWS Lambda",
      "Developed React components with client-side caching for the Music Lab, decreasing data fetch times by 78% (450ms to 99ms)",
      "Optimized UI rendering speed by 45% (980ms to 539ms) using optimistic updates with React Query",
      " Designed custom react hooks to decouple logic from UI and reuse across multiple components. Reduced CPU utilization by 58%, reducing unnecessary re-rendering of components using useMemo and useCallback hooks",
      "Integrated Microsoft Graph APIs to retrieve additional user data from Azure AD.",
    ],
    skills: [
      { name: "TypeScript", logo: "/images/skills/typescript.png" },
      { name: "JavaScript", logo: "/images/skills/js.png" },
      { name: "Node.js", logo: "/images/skills/nodejs.png" },
      { name: "React", logo: "/images/skills/react.png" },
      { name: "Recoil", logo: "/images/skills/recoil.png" },
      { name: "AWS", logo: "/images/skills/aws.png" },
      { name: "GraphQL", logo: "/images/skills/graphql.png" },
    ],
  },
  {
    startDate: "2020",
    endDate: "2020",
    roleTitle: "Software Engineer Intern",
    companyLogo: { src: "/images/navitas.png", width: 95, height: 55 },
    companyName: "Navitas Life Science",
    teamDetails: "Productivity Tools, Developer Productivity",
    jobDetails: [
      "Built tooling for automated processing and validation of software-requirements documents",
      "Enhanced developer productivity by 20%, with a significant reduction in error rate",
    ],
    skills: [
      { name: "Java", logo: "/images/skills/java.png" },
      { name: "C#", logo: "/images/skills/csharp.png" },
      { name: ".NET Framework", logo: "/images/skills/net.png" },
      { name: "Aspose", logo: "/images/skills/aspose.png" },
    ],
  },
  {
    startDate: "2015",
    endDate: "2015",
    roleTitle: "Research Intern",
    companyLogo: { src: "/images/ceg.jpg", width: 70, height: 55 },
    companyName: "College of Engineering Guindy",
    teamDetails: "Biomimic Algorithms, Wireless Sensor Networks Research",
    jobDetails: [
      "Achieved 10%improvement in the lifespan of wireless sensor network by finding maximum sensor covers",
      "Attained improvement by using the memetic algorithm with a local enhancement strategy",
    ],
    skills: [
      { name: "MATLAB", logo: "/images/skills/matlab.png" },
      { name: "Wireless Sensor Networks", logo: "/images/skills/sensors.png" },
    ],
  },
];
