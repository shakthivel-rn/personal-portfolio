import styles from "../Components.module.css";
import { ProjectItem } from "./ProjectItem";

export function Projects() {
  return (
    <div className={styles.section} style={{ paddingTop: "0px" }}>
      <span className={styles.title}>Web Development Projects</span>
      <span className={styles.subText}>
        A collection of personal projects showcasing my skills in building
        responsive, user-friendly interfaces with modern frontend technologies
      </span>
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
    title: "Meet Landing Page",
    link: "https://shakthivel-rn.github.io/meet-landing-page/",
    image: "/images/projects/meet-landing-page.png",
  },
  {
    title: "Testimonials Grid Section",
    link: "https://shakthivel-rn.github.io/testimonials-grid-section/",
    image: "/images/projects/testimonials-grid.png",
  },
  {
    title: "Four Card Feature Section",
    link: "https://shakthivel-rn.github.io/four-card-feature-section/",
    image: "/images/projects/four-card-feature-section.png",
  },
  {
    title: "Product Review Card",
    link: "https://shakthivel-rn.github.io/product-preview-card-component/",
    image: "/images/projects/product-page.png",
  },
  {
    title: "Recipe Page",
    link: "https://shakthivel-rn.github.io/recipe-page/",
    image: "/images/projects/recipe-page.png",
  },
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
