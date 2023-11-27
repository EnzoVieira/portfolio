"use client";

import { ComponentProps, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import { classNames } from "@/utils/classNames";

type IProps = ComponentProps<typeof Image>;

export function ParalaxImage({ alt, className = "", ...rest }: IProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!imageRef.current) return;

      gsap.to(imageRef.current, {
        scrollTrigger: {
          scrub: 1,
          start: "top bottom", // when the top of the trigger hits the bottom of the viewport
        },
        yPercent: -40,
      });
    }, imageRef);

    return () => ctx.revert();
  }, []);

  return (
    <Image
      ref={imageRef}
      alt={alt}
      className={classNames(className, "scale-[1.4] origin-top")}
      {...rest}
    />
  );
}
