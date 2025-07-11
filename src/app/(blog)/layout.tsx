import { LogoLink } from "../components/LogoLink"
import { HeaderMenu } from "../components/HeaderMenu"
import { LocalTimeText } from "../components/LocalTimeText"
import { SanityLive } from "@/sanity/lib/live"
import { DisableDraftMode } from "@/components/DisableDraftMode"
import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="px-4 w-screen max-w-6xl mx-auto">
      <header
        className="animate-translate-header py-6 flex justify-between font-medium"
        style={{ transform: "translateY(-100%)" }}
      >
        <LogoLink />

        <HeaderMenu />
      </header>

      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}

      <footer className="pb-16">
        <h5 className="uppercase text-xs opacity-50 pb-2">Socials</h5>

        <ul className="flex flex-wrap gap-4 items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/enzo-vieira/?locale=en_US"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a href="https://github.com/EnzoVieira" target="_blank">
              GitHub
            </a>
          </li>
        </ul>

        <div className="h-px w-full bg-black opacity-[.15] my-8" />

        <div className="flex justify-between">
          <div>
            <h5 className="text-xs uppercase opacity-50 pb-2">Version</h5>
            <p>2025 Edition</p>
          </div>

          <div>
            <h5 className="text-xs uppercase opacity-50 pb-2">Local Time</h5>
            <LocalTimeText />
          </div>
        </div>
      </footer>
    </main>
  )
}
