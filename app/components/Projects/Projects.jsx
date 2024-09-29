import styles from "../Components.module.css";
import { ProjectItem } from "./ProjectItem";

export function Projects() {
  return (
    <div className={styles.section} style={{ paddingTop: "0px" }}>
      <span className={styles.title}>Projects</span>
      <div className={styles.projects}>
        {projects.map(({ title, link, image }, index) => (
          <ProjectItem key={index} title={title} link={link} image={image} />
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Social Links Profile",
    link: "https://shakthivel-rn.github.io/social-links-profile/",
    image: "/images/projects/social-links-profile.png",
  },
  {
    title: "Blog Preview Card",
    link: "https://shakthivel-rn.github.io/blog-preview-card/",
    image: "/images/projects/blog-preview-card.png",
  },
  {
    title: "QR Code Component",
    link: "https://shakthivel-rn.github.io/qr-code-component/",
    image: "/images/projects/qr-code-component.png",
  },
];
