import styles from "./Sidebar.module.css";
import { iconMap } from "../../../public/images/icons/iconsMap";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const GitHub = iconMap["github"];
const LinkedIn = iconMap["linkedin"];
const CodePen = iconMap["codepen"];

export function Sidebar({ tab, setTab }) {
  return (
    <div>
      <div className={styles.sidebar}>
        <div className={styles.sidebarDetails}>
          <div className={styles.sideBarTop}>
            <div className={styles.name}>
              <span>Shakthivel </span>
              <span>Ramesh Nirmala</span>
            </div>
            <span className={styles.title}>Software Engineer</span>
            <span className={styles.description}>
              I engineer high-quality scalable systems, focused on performance
              and seamless user experience
            </span>
          </div>
          <ul className={styles.sideBarMiddle}>
            <li
              className={`${styles.sideBarMiddleItem} ${
                tab === 0 ? styles.sideBarMiddleItemActive : ""
              }`}
              onClick={() => {
                setTab(0);
                scrollToTop();
              }}
            >
              About
            </li>
            <li
              className={`${styles.sideBarMiddleItem} ${
                tab === 1 ? styles.sideBarMiddleItemActive : ""
              }`}
              onClick={() => {
                setTab(1);
                scrollToTop();
              }}
            >
              Experience
            </li>
            {/* <li
              className={`${styles.sideBarMiddleItem} ${
                tab === 2 ? styles.sideBarMiddleItemActive : ""
              }`}
              onClick={() => {
                setTab(2);
                scrollToTop();
              }}
            >
              Portfolio
            </li> */}
          </ul>
        </div>
        <div className={styles.iconList}>
          <a href="https://github.com/shakthivel-rn" target="_blank">
            <GitHub width={35} height={35} className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/shakthivel-ramesh-nirmala-0262921b0"
            target="_blank"
            className={styles.icon}
          >
            <LinkedIn src={"/images/linkedin.png"} width={35} height={35} />
          </a>
          {/* <span>
            <CodePen width={35} height={35} className={styles.icon} />
          </span> */}
        </div>
      </div>
    </div>
  );
}
