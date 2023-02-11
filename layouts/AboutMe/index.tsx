import { useRef } from "react"
import anime from "animejs"
import Image from "next/image"
import { Poppins } from "@next/font/google"

import styles from "./AboutMe.module.scss"

// Images
import portrait from "@/public/portrait-transparent2.png"
import githubLogo from "@/public/logos/githubLogo.svg"
import linkedinLogo from "@/public/logos/linkedinLogo.png"
import instagramLogo from "@/public/logos/instagramLogo.svg"

import { useObserver } from "@/hooks/useObserver"

const font600 = Poppins({ weight: "600", subsets: ["latin"] })
const font400 = Poppins({ weight: "400", subsets: ["latin"] })

export function AboutMe() {
  const divFluidRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLImageElement>(null)
  const headertRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const isVisible = useObserver(divFluidRef)
  const alreadyShown = useRef(false)

  function fluid() {
    if (divFluidRef.current && !alreadyShown.current) {
      anime({
        targets: divFluidRef.current,
        translateY: -600,
        rotate: 360,
        duration: 5000,
        easing: "linear",
      })

      anime({
        targets: portraitRef.current,
        opacity: 1,
        translateY: [10, 0],
        delay: 3800,
        easing: "cubicBezier(.37, .15, .4, 1)",
      })

      anime
        .timeline()
        .add({
          targets: headertRef.current,
          opacity: [0, 1],
          translateX: [10, 0],
          delay: 500,
          duration: 5000,
        })
        .add({
          targets: [descriptionRef.current, footerRef.current],
          opacity: [0, 1],
          translateX: [10, 0],
          duration: 2000,
        })

      alreadyShown.current = true
    }
  }

  if (isVisible) fluid()

  return (
    <div className={styles.aboutMeContainer}>
      <header ref={headertRef} className={styles.header}>
        <h3 className={font600.className}>About me</h3>
      </header>

      <aside className={styles.aside}>
        <div className={styles.portraitContainer}>
          <div className={styles.fluidContainer}>
            <div className={styles.fluidPortrait}>
              <div ref={divFluidRef} className={styles.fluid} />
            </div>
          </div>

          <Image ref={portraitRef} src={portrait} alt="portrait" />
        </div>
      </aside>

      <p
        ref={descriptionRef}
        className={`${font400.className} ${styles.description}`}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex error
        molestiae deserunt ab dicta dolorem delectus voluptatibus ad aut nemo
        vel animi alias unde ea eligendi sapiente, qui nesciunt aperiam!
      </p>

      <footer
        ref={footerRef}
        className={`${font400.className} ${styles.footer}`}
      >
        <div>
          <Image src={githubLogo} alt="GitHub" width={30} height={30} />
          <a
            href="https://github.com/enzoVieira"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div>
          <Image src={linkedinLogo} alt="LinkedIn" width={30} height={30} />
          <a
            href="https://github.com/enzoVieira"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div>
          <Image src={instagramLogo} alt="Instagram" width={30} height={30} />
          <a
            href="https://github.com/enzoVieira"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  )
}
