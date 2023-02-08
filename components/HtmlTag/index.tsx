import { ReactNode } from "react"
import { Source_Code_Pro } from "@next/font/google"

import styles from "./HtmlTag.module.scss"

const codeFont400 = Source_Code_Pro({ weight: "400", subsets: ["latin"] })

interface IProps {
  children: ReactNode
  tag: string
  variant?: "large"
}

export function HtmlTag({ children, tag, variant }: IProps) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.tag} ${variant == "large" && styles.large}`}>
        <p
          className={`${codeFont400.className} ${styles.openTag}`}
        >{`<${tag}>`}</p>

        <p className={`${codeFont400.className} ${styles.closeTag}`}>
          {`</${tag}>`}
        </p>
      </div>

      <div>{children}</div>
    </div>
  )
}
