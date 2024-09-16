import { Sidebar } from './components/Sidebar/Sidebar'
import styles from './layout.module.css'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.mainLayout}>
          <Sidebar />
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}