import { ReactNode, useRef } from "react"
import anime from "animejs"

import styles from "./AnimatedDiv.module.scss"

import { useObserver } from "@/hooks/useObserver"

interface IProps {
  children: ReactNode
}

export function RevealText({ children }: IProps) {
  const alreadyShown = useRef(false)
  const divSlideInRef = useRef<HTMLDivElement>(null)
  const divContentRef = useRef<HTMLDivElement>(null)
  const isVisible = useObserver(divSlideInRef)

  function reveal() {
    if (divSlideInRef.current && !alreadyShown.current) {
      anime
        .timeline()
        .add({
          targets: divSlideInRef.current,
          width: ["0%", "100%"],
          easing: "cubicBezier(0.19, 1, 0.22, 1)",
          duration: 1000,
        })
        .add({
          targets: divContentRef.current,
          opacity: 1,
          duration: 1,
        })
        .add({
          targets: divSlideInRef.current,
          width: ["100%", "0%"],
          left: "100%",
          right: 0,
          easing: "cubicBezier(0.19, 1, 0.22, 1)",
          duration: 1000,
        })

      alreadyShown.current = true
    }
  }

  if (isVisible) reveal()

  return (
    <div className={styles.container}>
      <div ref={divSlideInRef} className={styles.sliderIn} />

      <div ref={divContentRef} className={styles.content}>
        {children}
      </div>
    </div>
  )
}
