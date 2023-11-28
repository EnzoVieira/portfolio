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
import { classNames } from "@/utils/classNames";

gsap.registerPlugin(ScrollTrigger);

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  as?: ElementType;
}

export function TriggerFadeIn({
  children,
  as: Tag = "div",
  className = "",
  ...rest
}: IProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!divRef.current) return;

      gsap.from(divRef.current, {
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 100%",
        },
        opacity: 0,
        duration: 0.8,
        ease: CustomEase.create("custom", "0.62,0.05,0.01,0.99"),
      });
    }, divRef);

    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={divRef} className={classNames(className)} {...rest}>
      {children}
    </Tag>
  );
}
