import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sideBarTop}>
                <span className={styles.name}>Shakthivel Ramesh Nirmala</span>
                <span className={styles.title}>Software Engineer</span>
                <span className={styles.description}>I create optimized, responsive, and secure applications by merging front-end innovation with robust backend solutions, ensuring high performance and seamless user experiences</span>
            </div>
            <ul className={styles.sideBarMiddle}>
                <li className={styles.sideBarMiddleItem}>About</li>
                <li className={styles.sideBarMiddleItem}>Education</li>
                <li className={styles.sideBarMiddleItem}>Experience</li>
                <li className={styles.sideBarMiddleItem}>Portfolio</li>
            </ul>
        </div>
    )
}