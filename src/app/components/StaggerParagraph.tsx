"use client";

import { HTMLAttributes, ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import SplitType from "split-type";

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function StaggerParagraph({ children, ...rest }: IProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!textRef.current) return;

      let split = SplitType.create(textRef.current);

      const timeline = gsap.timeline();

      timeline
        .from(textRef.current, {
          autoAlpha: 0,
        })
        .from(split.words, {
          opacity: 0,
          y: 75,
          stagger: 0.03,
          delay: 0.2,
          duration: 0.8,
          ease: CustomEase.create("custom", "0.62,0.05,0.01,0.99"),
        });

      return () => split.revert();
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <p ref={textRef} id="paragraph" {...rest}>
      {children}
    </p>
  );
}
