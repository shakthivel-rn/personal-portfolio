import { Sidebar } from './components/Sidebar/Sidebar'
import styles from './layout.module.css'
import './globals.css'
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
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