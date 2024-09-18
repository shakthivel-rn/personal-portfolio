import styles from './Sidebar.module.css'
import Image from 'next/image'

export function Sidebar() {
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
                        <span className={styles.description}>I develop innovative, secure applications combining responsive front-end and robust backend solutions.</span>
                    </div>
                    <ul className={styles.sideBarMiddle}>
                        <li className={styles.sideBarMiddleItem}>About</li>
                        <li className={styles.sideBarMiddleItem}>Education</li>
                        <li className={styles.sideBarMiddleItem}>Experience</li>
                        <li className={styles.sideBarMiddleItem}>Portfolio</li>
                    </ul>
                </div>
                <div className={styles.iconList}>
                    <span><Image src={'/images/github.png'} width={35} height={35} /></span>
                    <span><Image src={'/images/linkedin.png'} width={35} height={35} /></span>
                    <span><Image src={'/images/codepen.png'} width={35} height={35} /></span>
                </div>
            </div>
        </div>

    )
}