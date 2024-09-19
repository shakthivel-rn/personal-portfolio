"use client";

import { useState } from "react";
import styles from "../Components.module.css";
import { Recommendation } from "./Recommendation";

export function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentRecommendation = recommendations[currentIndex];
  const { name, jobTitle, company, recommendation } = currentRecommendation;

  return (
    <div className={styles.section}>
      <span className={styles.title}>Recommendations</span>
      <Recommendation
        name={name}
        jobTitle={jobTitle}
        company={company}
        recommendation={recommendation}
      />

      <div className={styles.navigationBar}>
        {recommendations.map((_, index) => (
          <button
            key={index}
            className={`${styles.navigation} ${
              currentIndex === index ? styles.navigationActive : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

const recommendations = [
  {
    name: "Hamon Giacomelli",
    jobTitle: "Senior Software Developer",
    company: "Instituto de Pesquisas Eldorado",
    recommendation: `Shakthivel is a fast learner, and it’s been amazing to see how quickly he picks up new concepts and technologies. He dives into challenges headfirst, and in the time we’ve worked together, I've seen him grow rapidly in his software development abilities. What's more, he's been honing his skills in anticipating performance issues and enhancing the user interface. I genuinely believe Shakthivel has a bright future ahead in software development. His enthusiasm and constant drive to improve make him a standout. He’s not just a great colleague but also a fantastic person to work with`,
  },
  {
    name: "Tanato Cartaxo",
    jobTitle: "Developer Master",
    company: "CI&T Canada",
    recommendation: `Having worked with Sakthivel for the past 7 months, he has shown himself to be a very dedicated professional with a great sense of commitment to the team, his tasks and the project goals.
  One of his key strengths is that he has a genuine interest in seeking knowledge and understanding in depth the innerworkings of the project's technology stack, improving himself and striving to deliver with more and more quality every time. He's also a quick learner, adapting with ease to new challenges and always open to receive constructive feedbacks.
  A solid developer with a great carreer ahead`,
  },
  {
    name: "Ethan Tong",
    jobTitle: "Software Engineer",
    company: "Atlassian",
    recommendation: `Shakthi is always eager to learn new technology and constantly improve himself. He has contributed significantly to the project in a short period of time as an intern. He is passionate about his work and keeps a positive attitude towards any challenges. It's been a pleasure working with him, and I'm very thankful for his help and contributions to our team`,
  },
  {
    name: "Arun Kumar A",
    jobTitle: "ML Engineer",
    company: "Observe.ai",
    recommendation: `Shakthivel and I have worked together on several projects in college. His determination impressed me a lot. Also, he is enthusiastic and cheerful about his work. I miss doing projects with him. Shakthivel will be a valuable resource to any organization, and I highly recommend him to anyone looking for a Software Development Engineer`,
  },
];
