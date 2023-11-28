import { HTMLAttributes, ReactNode } from "react";

import { classNames } from "@/utils/classNames";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function FadeIn({ children, className = "", ...rest }: IProps) {
  return (
    <div
      className={classNames("animate-fade-in opacity-0", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
