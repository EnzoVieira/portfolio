import { Poppins } from "@next/font/google"

import styles from "@/styles/Home.module.scss"
import { Hero } from "@/layouts/Hero"

const font600 = Poppins({ weight: "600", subsets: ["latin"] })

export default function Home() {
  return (
    <div className={styles.snapContainer}>
      <section className={styles.snapSection}>
        <Hero />
      </section>

      <section className={styles.snapSection}>
        <h2 className={`${font600.className} ${styles.title}`}>My Expertise</h2>
      </section>
    </div>
  )
}
