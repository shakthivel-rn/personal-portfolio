import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sideBarTop}>
                <span className={styles.name}>Shakthivel </span>
                <span className={styles.name}>Ramesh Nirmala</span>
                <span className={styles.title}>Software Engineer</span>
                <span className={styles.description}>I develop innovative, secure applications combining responsive front-end and robust backend solutions.</span>
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