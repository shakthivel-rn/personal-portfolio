"use client";

import { useState } from "react";
import styles from "./Recommendation.module.css";
import Image from "next/image";

export function Recommendation({ name, jobTitle, company, recommendation }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.recommendation}>
      <div className={styles.quotes}>
        <Image src={"/images/quotes.png"} width={50} height={50} />
      </div>
      <div className={styles.recommendationDetails}>
        <blockquote
          className={
            isExpanded
              ? styles.recommendationDescriptionExpanded
              : styles.recommendationDescription
          }
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {recommendation}
        </blockquote>
        <div className={styles.recommendationGivenBy}>
          <span className={styles.recommendationGivenByName}>
            <span>{name}</span>
            <a
              href="https://www.linkedin.com/in/shakthivel-ramesh-nirmala-0262921b0/details/recommendations/"
              target="_blank"
              className={styles.recommendationLink}
            >
              <Image src={"/images/redirect.png"} width={12} height={12} />
            </a>
          </span>
          <span>{`${jobTitle} at ${company}`}</span>
        </div>
      </div>
    </div>
  );
}
