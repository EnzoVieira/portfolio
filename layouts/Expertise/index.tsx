import { Poppins, Source_Code_Pro } from "@next/font/google"
import { Desktop, DeviceMobile, TerminalWindow } from "phosphor-react"

import styles from "./Expertise.module.scss"

import { HtmlTag } from "@/components/HtmlTag"
import { FadeIn } from "@/components/FadeIn"

const font600 = Poppins({ weight: "600", subsets: ["latin"] })
const font400 = Poppins({ weight: "400", subsets: ["latin"] })

const codeFont400 = Source_Code_Pro({ weight: "400", subsets: ["latin"] })

export function Expertise() {
  return (
    <div className={styles.expertiseContainer}>
      <HtmlTag tag="exp" variant="large">
        <h2 className={`${font600.className} ${styles.title}`}>My Expertise</h2>

        <div className={`${styles.boxesContainer} ${font400.className}`}>
          <FadeIn className={styles.box}>
            <div className={styles.boxHeader}>
              <Desktop size={42} color="#6904C2" />
              <h4>Frontend</h4>
            </div>

            <HtmlTag tag="p">
              <p className={codeFont400.className}>
                Passionate Frontend developer, experienced in ReactJS, NextJS
                and UI/UX. technical skills with good design practices to
                produce efficient and user-friendly solutions are my qualities.
                I always seek to innovate and improve my skills to offer the
                best to my projects
              </p>
            </HtmlTag>
          </FadeIn>

          <FadeIn delay={700} className={styles.box}>
            <div className={styles.boxHeader}>
              <DeviceMobile size={42} color="#F64740" />
              <h4>Mobile</h4>
            </div>

            <HtmlTag tag="p">
              <p className={codeFont400.className}>
                Skilled programmer in mobile development with expertise in React
                Native and Expo. Focus on producing efficient and high quality
                solutions, always seeking to innovate and expand my knowledge
              </p>
            </HtmlTag>
          </FadeIn>

          <FadeIn delay={900} className={styles.box}>
            <div className={styles.boxHeader}>
              <TerminalWindow size={48} color="#00875F" />
              <h4>Software</h4>
            </div>

            <HtmlTag tag="p">
              <p className={codeFont400.className}>
                Mastered the functional, object-oriented and imperative
                paradigm. In addition to being very familiar with tools such as
                Git, GitHub, Docker, among others...
              </p>
            </HtmlTag>
          </FadeIn>
        </div>
      </HtmlTag>
    </div>
  )
}
