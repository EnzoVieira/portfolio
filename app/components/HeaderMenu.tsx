"use client";

import { usePathname, useRouter } from "next/navigation";

export function HeaderMenu() {
  const pathname = usePathname();
  const router = useRouter();

  const isProjectPage = pathname !== "/";

  return isProjectPage ? (
    <button onClick={() => router.push("/")}>Go back</button>
  ) : (
    <button>Menu</button>
  );
}
