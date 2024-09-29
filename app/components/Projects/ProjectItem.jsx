import styles from "./ProjectItem.module.css";
import Eye from "../../../public/images/icons/projects/eye.svg";
import Image from "next/image";

export function ProjectItem({ title, link, image }) {
  return (
    <div className={styles.projectItem}>
      <a href={link} target="_blank">
        <figure className={styles.projectImage}>
          <div className={styles.projectItemIconBox}>
            <Eye width={25} height={25} style={{ fill: "white" }} />
          </div>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt="projectImage"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSk..."
          />
        </figure>
        <h3 className={styles.projectTitle}>{title}</h3>
      </a>
    </div>
  );
}
