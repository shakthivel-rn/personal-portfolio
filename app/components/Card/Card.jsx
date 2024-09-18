import styles from './Card.module.css'
import Image from 'next/image'

export const Card = ({ title, description, imgSrc }) => {
    console.log(imgSrc)
    return (
        <div className={styles.card}>
            <div className={styles.icon}><Image src={imgSrc} width={50} height={50} /></div>
            <div className={styles.cardDetails}>
                <span className={styles.cardTitle}>{title}</span>
                <span className={styles.cardDescription}>{description}</span>
            </div>
        </div>
    )
}