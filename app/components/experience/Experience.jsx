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
      {
        text: "Developing and maintaining high-quality solutions for Music Lab and AI Music Scheduler applications in Python and Typescript, ensuring efficient and error-free operation",
      },
      {
        text: "Product ownership of user management services that control user access to stations and granular station-level access. Integrated AI Music Scheduler with user management services enabling a smoother user onboarding process and improved security measures",
      },
      {
        text: "Created a suite of reusable react components shared between Music Lab and AI Music Scheduler ensuring less development efforts, consistency in UI/UX, and avoiding code duplication",
      },
      {
        text: "Transitioned deeply nested props in react components to recoil state, reducing prop drilling and re-renders (32% ~ rendering time reduced by 50ms) and enhancing code readability",
      },
      {
        text: "Re-architected user preferences table in DynamoDB using advanced indexing techniques and partitioning strategies, resulting in reduced query latency (52% ~ average 100ms to 48ms) and ensuring extensibility to meet evolving business needs",
      },
      {
        text: "Migrated legacy javascript codebase to typescript, using modern javascript features and typescript typing, enhancing type safety and reducing error rates",
      },
      {
        text: "Collaborate effectively with a diverse range of professionals, including developers, product owners, and business operations teams, to align technical solutions with business needs",
      },
    ],
    skills: [
      { name: "TypeScript", logo: "typescript", color: "#3178C6" },
      { name: "JavaScript", logo: "javascript", color: "#F7DF1E" },
      { name: "Node.js", logo: "nodedotjs", color: "#5FA04E" },
      { name: "React", logo: "react", color: "#61DAFB" },
      { name: "Recoil", logo: "recoil", color: "#3578E5" },
      { name: "Python", logo: "python" },
      { name: "AWS", logo: "amazonwebservices", color: "#FF9900" },
      { name: "SQL", logo: "sql" },
      { name: "Postgres", logo: "postgre" },
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
      {
        text: "Created complex queries to retrieve and update users and their station access level from AWS DynamoDB services. Reduced query latency (80% ~ 500ms to 100ms) using DynamoDB Query and Global Secondary Index",
      },
      {
        text: "Built GraphQL APIs in Node.js and optimized the API performance (50% ~ 850ms to 425ms) using batch data loading techniques. Deployed the APIs as an AWS lambda function using serverless framework",
      },
      {
        text: "Developed react components for user management module in music lab application and implemented client-side caching decreasing data fetching time for frequently accessed data (78% ~ 450ms to 99ms)",
      },
      {
        text: "Optimized UI rendering speed by (45% ~ 980ms to 539ms) for updating user station access and station-level permissions by implementing optimistic updates with React Query",
      },
      {
        text: "Designed custom react hooks to decouple logic from UI and reuse across multiple components. Reduced CPU utilization by 58%, reducing unnecessary re-rendering of components using useMemo and useCallback hooks",
      },
      {
        text: "Implemented integration with Microsoft Graph APIs to retrieve additional user information from Azure AD",
      },
      {
        text: "Secured third place at the iHeartMedia Hackathon 2022 by creating a virtual iHeartMedia store for Oculus Quest using Unity and C#, allowing users to listen to personalized podcasts and purchase event tickets",
      },
    ],
    skills: [
      { name: "TypeScript", logo: "typescript", color: "#3178C6" },
      { name: "JavaScript", logo: "javascript", color: "#F7DF1E" },
      { name: "Node.js", logo: "nodedotjs", color: "#5FA04E" },
      { name: "React", logo: "react", color: "#61DAFB" },
      { name: "Recoil", logo: "recoil", color: "#3578E5" },
      { name: "AWS", logo: "amazonwebservices", color: "#FF9900" },
      { name: "GraphQL", logo: "graphql", color: "#E10098" },
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
      {
        text: "Developed a tooling system for automated processing and validation of software requirements documents, streamlining the review process and ensuring consistency across projects",
      },
      {
        text: "Boosted developer productivity by 20% through the automation of manual tasks, reducing bottlenecks in the workflow and minimizing human errors",
      },
      {
        text: "Achieved a significant reduction in error rate by incorporating advanced validation checks, improving the overall accuracy and reliability of software requirements documentation",
      },
    ],
    skills: [
      { name: "Java", logo: "java" },
      { name: "C#", logo: "csharp" },
      { name: ".NET Framework", logo: "dotnet" },
      { name: "Aspose", logo: "/images/icons/technologies/aspose.png" },
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
      {
        text: "Achieved 10% improvement in the lifespan of wireless sensor networks by identifying maximum sensor covers through memetic algorithm",
      },
      {
        text: "Implemented a local enhancement strategy within the memetic algorithm to optimize sensor activation and increase network efficiency",
      },
      {
        text: "Published a research paper in IEEE showcasing the algorithm's superior performance in maximizing network lifespan while reducing redundancy",
        link: "https://ieeexplore.ieee.org/document/8031629",
      },
    ],
    skills: [
      { name: "MATLAB", logo: "/images/icons/technologies/matlab.png" },
      { name: "Wireless Sensor Networks", logo: "sensor" },
    ],
  },
];
