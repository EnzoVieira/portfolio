"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { HTMLAttributes, ReactNode } from "react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface TransitionLinkProps
  extends LinkProps,
    HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

export function TransitionLink({
  children,
  href,
  ...rest
}: TransitionLinkProps) {
  const router = useRouter();

  async function handleTransition(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(1000);

    router.push(href);

    await sleep(1000);

    body?.classList.remove("page-transition");
  }

  return (
    <Link onClick={handleTransition} href={href} {...rest}>
      {children}
    </Link>
  );
}
