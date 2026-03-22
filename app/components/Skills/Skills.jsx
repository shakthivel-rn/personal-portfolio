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
          position as a Software Engineer at Meta.
        </span>
        <span>
          At Meta, I work on the Comet Product Infrastructure team, building
          AI-powered tools to modernize infrastructure, automate code migrations
          at scale, and improve performance across products like Ads Manager,
          Facebook, Instagram, and WhatsApp. Previously at iHeartMedia, I
          contributed to the development of key applications like Music Lab, AI
          Music Scheduler, and Selector Cloud, building reusable components,
          optimizing frontend and backend systems, and improving performance and
          reliability using technologies like Python, TypeScript, React, and
          AWS.
        </span>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>What I&apos;m Doing</span>
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
    imgSrc: "ui",
    title: "UI Component Development",
    description:
      "Build high-quality, reusable React components to speed up development and ensure consistent UI/UX",
  },
  {
    imgSrc: "optimization",
    title: "UI Rendering Optimization",
    description:
      "Optimize UI performance to ensure fast rendering, smooth interactions, and an overall improved user experience.",
  },
  {
    imgSrc: "api",
    title: "API Development and Optimization",
    description:
      "Develop robust APIs with scalable architecture, optimizing performance and cost efficiency",
  },
  {
    imgSrc: "db",
    title: "Database Query Efficiency",
    description:
      "Engineer efficient database queries to enhance data retrieval speed and overall performance",
  },
];
