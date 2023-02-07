import { useEffect, useState } from "react"
import anime from "animejs"

import styles from "@/styles/Home.module.scss"

export default function Home() {
  const [columns, setColumns] = useState(0)
  const [rows, setRows] = useState(0)

  let isClicked = false

  function getGridSize() {
    const columns = Math.floor(document.body.clientWidth / 50)
    const rows = Math.floor(document.body.clientHeight / 50)

    setColumns(columns)
    setRows(rows)

    console.log(columns, rows)
  }

  useEffect(() => {
    getGridSize()

    window.addEventListener("resize", getGridSize)
  }, [])

  function handleOnClickTile(index: number) {
    isClicked = !isClicked

    const tilesGrid = document.querySelector("[class^='Home_tiles_']")

    anime({
      targets: tilesGrid!.children,
      opacity: isClicked ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    })
  }

  return (
    <main className={styles.main}>
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
