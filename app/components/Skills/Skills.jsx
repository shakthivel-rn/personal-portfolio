import styles from "../Components.module.css";
import { Card } from "./SkillCard";

export function Skills() {
  return (
    <div>
      <div className={styles.aboutMe}>
        <span>
          With a Master of Science in Software Engineering from San Jose State
          University and a Bachelor of Engineering in Computer Science from
          College of Engineering, Guindy, I have cultivated a robust foundation
          in both the theoretical and practical aspects of software engineering.
          My path in technology encompasses a solid education, practical
          internships, and meaningful projects, culminating in my current
          position as a Software Engineer at iHeartMedia.
        </span>
        <span>
          During my time at iHeartMedia, I have contributed to the development
          of key applications in the Music Lab and AI Music Scheduler projects,
          using technologies like Python, TypeScript, and React. I have
          engineered efficient user management systems, built reusable React
          components to enhance UI consistency, and optimized backend systems
          with advanced indexing in AWS DynamoDB, significantly improving
          performance and reducing latency
        </span>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>What I'm Doing</span>
        <div className={styles.skills}>
          {skills.map(({ imgSrc, title, description }, index) => (
            <Card
              key={index}
              imgSrc={imgSrc}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const skills = [
  {
    imgSrc: "/images/ui.png",
    title: "UI Component Development",
    description:
      "Build high-quality, reusable React components to speed up development and ensure consistent UI/UX",
  },
  {
    imgSrc: "/images/optimization.png",
    title: "UI Rendering Optimization",
    description:
      "Craft modern, high-quality designs with a professional touch for exceptional user experiences",
  },
  {
    imgSrc: "/images/api.png",
    title: "API Development and Optimization",
    description:
      "Developed robust APIs with scalable architecture, optimizing performance and cost efficiency",
  },
  {
    imgSrc: "/images/query.png",
    title: "Database Query Efficiency",
    description:
      "Engineered efficient database queries to enhance data retrieval speed and overall performance",
  },
];