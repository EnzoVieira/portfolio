import { ReactElement, ReactNode, useRef } from "react"
import anime from "animejs"

import styles from "./FadeIn.module.scss"

import { useObserver } from "@/hooks/useObserver"

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 500, className, ...rest }: IProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const isVisible = useObserver(divRef)
  const alreadyShown = useRef(false)

  function fade() {
    if (divRef.current && !alreadyShown.current) {
      anime({
        targets: divRef.current,
        translateY: [100, 0],
        opacity: [0, 1],
        delay,
      })

      alreadyShown.current = true
    }
  }

  if (isVisible) fade()

  return (
    <div ref={divRef} className={`${styles.fadeIn} ${className}`} {...rest}>
      {children}
    </div>
  )
}
