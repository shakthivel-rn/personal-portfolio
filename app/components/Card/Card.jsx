import styles from './Card.module.css'

export const Card = ({ title, description, icon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>Icon</div>
            <div className={styles.cardDetails}>
                <span className={styles.cardTitle}>{title}</span>
                <span className={styles.cardDescription}>{description}</span>
            </div>
        </div>
    )
}