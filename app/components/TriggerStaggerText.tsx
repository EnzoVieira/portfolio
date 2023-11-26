"use client";

import {
  ElementType,
  HTMLAttributes,
  ReactNode,
  useLayoutEffect,
  useRef,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: ElementType;
}

export function TriggerStaggerText({
  children,
  as: Tag = "h4",
  ...rest
}: IProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!textRef.current) return;

      let split = SplitType.create(textRef.current);

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: split.chars,
          start: "top 100%",
        },
        opacity: 0,
        y: 115,
        stagger: 0.05,
        duration: 0.8,
        ease: CustomEase.create("custom", "0.62,0.05,0.01,0.99"),
      });

      return () => split.revert();
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={textRef} {...rest}>
      {children}
    </Tag>
  );
}
