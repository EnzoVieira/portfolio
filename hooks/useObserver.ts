import { RefObject, useEffect, useState } from "react"

export function useObserver(ref: RefObject<Element>) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref])

  return isVisible
}
