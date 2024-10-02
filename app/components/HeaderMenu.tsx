"use client";

import { TransitionLink } from "@/components/TransitionLink";
import { usePathname } from "next/navigation";

export function HeaderMenu() {
  const pathname = usePathname();

  const isProjectPage = pathname !== "/";

  return isProjectPage ? (
    <TransitionLink href="/">Go back</TransitionLink>
  ) : (
    <button>Menu</button>
  );
}
