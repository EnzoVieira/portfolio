import { useEffect, useState } from "react"
import anime from "animejs"
import { Poppins } from "@next/font/google"

import styles from "@/styles/Home.module.scss"

const font600 = Poppins({ weight: "600", subsets: ["latin"] })
const font400 = Poppins({ weight: "400", subsets: ["latin"] })

export default function Home() {
  const [columns, setColumns] = useState(0)
  const [rows, setRows] = useState(0)
  const [showTiles, setShowTile] = useState(true)

  function getGridSize() {
    const columns = Math.floor(document.body.clientWidth / 50)
    const rows = Math.floor(document.body.clientHeight / 50)

    setColumns(columns)
    setRows(rows)

    console.log(columns, rows)
  }

  function animationTimeLine() {
    const title1 = document.querySelector(
      "[class^='Home_frontTitleContainer_']"
    )

    const title2 = document.querySelector(
      "[class^='Home_behindTitleContainer_']"
    )

    anime({
      easing: "easeOutExpo",
      targets: title1,
      opacity: showTiles ? 0 : 1,
      delay: showTiles ? 0 : 400,
    })

    anime({
      easing: "easeOutExpo",
      targets: title2,
      opacity: showTiles ? 1 : 0,
      delay: showTiles ? 400 : 0,
    })
  }

  function handleOnClickTile(index: number) {
    setShowTile((prevState) => !prevState)

    const tilesGrid = document.querySelector("[class^='Home_tiles_']")

    anime({
      targets: tilesGrid!.children,
      opacity: showTiles ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    })

    animationTimeLine()
  }

  useEffect(() => {
    getGridSize()

    window.addEventListener("resize", getGridSize)
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.titlesContainer}>
        <div className={styles.frontTitleContainer}>
          <h1 className={`${font600.className} ${styles.title}`}>
            Enzo Vieira
          </h1>

          <h3 className={`${font400.className} ${styles.subtitle}`}>
            Web & App Developer and <span>Graduated</span> Future Software
            Engineer
          </h3>
        </div>

        <div className={styles.behindTitleContainer}>
          <h1 className={`${font600.className} ${styles.title}`}>
            Personal Portfolio
          </h1>

          <h3 className={`${font400.className} ${styles.subtitle}`}>
            Web & App Developer and <span>Graduated</span> Future Software
            Engineer
          </h3>
        </div>
      </div>

      <div className={styles.tiles}>
        {Array.from(Array(columns * rows)).map((_, index) => (
          <div
            key={index}
            className={styles.tile}
            onClick={() => handleOnClickTile(index)}
          />
        ))}
      </div>
    </main>
  )
}
