"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import SplitType from "split-type";

interface IProps {
  children: ReactNode;
}

export function StaggerText({ children }: IProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!textRef.current) return () => split.revert();

      let split = SplitType.create(textRef.current);

      gsap.from(split.chars, {
        opacity: 0,
        y: 115,
        stagger: 0.04,
        delay: 0.2,
        duration: 0.8,
        ease: CustomEase.create("custom", "0.62,0.05,0.01,0.99"),
      });

      return () => split.revert();
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <h1 ref={textRef} className="text-5xl uppercase font-medium">
      {children}
    </h1>
  );
}
