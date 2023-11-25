import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { classNames } from "@/utils/classNames";
import { LogoLink } from "./components/LogoLink";
import { HeaderMenu } from "./components/HeaderMenu";

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
      </body>
    </html>
  );
}
