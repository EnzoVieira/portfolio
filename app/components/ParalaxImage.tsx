"use client";

import { ComponentProps, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

import { classNames } from "@/utils/classNames";

type IProps = ComponentProps<typeof Image>;

export function ParalaxImage({ alt, className = "", ...rest }: IProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!imageRef.current) return;

      // gsap.to(imageRef.current, {
      //   scrollTrigger: {
      //     scrub: 1,
      //   },
      //   yPercent: -25,
      // });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 100%",
        },
        duration: 2.25,
        ease: CustomEase.create("custom", "0.62,0.05,0.01,0.99"),
        // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        opacity: 0,
        yPercent: 50,
      });
    }, imageRef);

    return () => ctx.revert();
  }, []);

  return (
    <Image
      ref={imageRef}
      alt={alt}
      className={classNames(className)}
      {...rest}
    />
  );
}
