"use client";

import { HTMLAttributes, ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import SplitType from "split-type";
import { classNames } from "@/utils/classNames";

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function StaggerText({ children, className = "", ...rest }: IProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!textRef.current) return () => split.revert();

      let split = SplitType.create(textRef.current);

      gsap.from(split.chars, {
        opacity: 0,
        y: 115,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.8,
        ease: CustomEase.create("custom", "0.62,0.05,0.01,0.99"),
      });

      return () => split.revert();
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={textRef}
      className={classNames(
        "text-5xl uppercase font-medium tracking-tight lg:text-8xl",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}