import styles from "@/styles/Home.module.scss"

import { Hero } from "@/layouts/Hero"
import { Expertise } from "@/layouts/Expertise"

export default function Home() {
  return (
    <div className={styles.snapContainer}>
      <section className={styles.snapSection}>
        <Hero />
      </section>

      <section className={styles.snapSection}>
        <Expertise />
      </section>
    </div>
  )
}
