import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { classNames } from "@/utils/classNames";
import { LogoLink } from "./components/LogoLink";
import { HeaderMenu } from "./components/HeaderMenu";
import { LocalTimeText } from "./components/LocalTimeText";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enzo Vieira | Portfolio",
  description: "Enzo Vieira personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={classNames(
          montserrat.className,
          "px-4 w-screen max-w-6xl mx-auto",
        )}
      >
        <header className="-translate-y-full animate-translate-header py-6 justify-between flex font-medium">
          <LogoLink />

          <HeaderMenu />
        </header>

        {children}

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

          <div className="h-[1px] w-full bg-black opacity-[.15] my-8" />

          <div className="flex justify-between">
            <div>
              <h5 className="text-xs uppercase opacity-50 pb-2">Version</h5>
              <p>2023 Edition</p>
            </div>

            <div>
              <h5 className="text-xs uppercase opacity-50 pb-2">Local Time</h5>
              <LocalTimeText />
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
