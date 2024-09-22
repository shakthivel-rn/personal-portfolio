"use client";

import { Sidebar } from "./components/sidebar/Sidebar";
import styles from "./layout.module.css";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { LayoutContext } from "./useLayout";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [tab, setTab] = useState(0);

  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <div className={styles.mainLayout}>
          <Sidebar tab={tab} setTab={setTab} />
          <div className={styles.content}>
            <LayoutContext.Provider value={{ tab }}>
              {children}
            </LayoutContext.Provider>
          </div>
        </div>
      </body>
    </html>
  );
}
