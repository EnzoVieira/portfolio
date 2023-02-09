import styles from "@/styles/Home.module.scss"

import { Hero } from "@/layouts/Hero"
import { Expertise } from "@/layouts/Expertise"
import { AboutMe } from "@/layouts/AboutMe"

export default function Home() {
  return (
    <div className={styles.snapContainer}>
      <section className={styles.snapSection}>
        <Hero />
      </section>

      <section className={styles.snapSection}>
        <Expertise />
      </section>

      <section className={styles.snapSection}>
        <AboutMe />
      </section>
    </div>
  )
}
