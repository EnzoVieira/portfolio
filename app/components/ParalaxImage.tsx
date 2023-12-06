"use client";

import { ComponentProps, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";

import { classNames } from "@/utils/classNames";

type IProps = ComponentProps<typeof Image>;

gsap.registerPlugin(ScrollTrigger);

export function ParalaxImage({ alt, className = "", ...rest }: IProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

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

      gsap.to(divRef.current, {
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 70%",
        },
        duration: 2,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: CustomEase.create("custom", "0.62,0.05,0.01,0.99"),
      });

      gsap.from(divRef.current, {
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 70%",
        },
        duration: 4,
        filter: "blur(15px)",
        ease: "expo.out",
      });
    }, imageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="image"
      ref={divRef}
      className="w-full aspect-[4/3] relative overflow-hidden lg:aspect-[3/4] lg:col-start-2 lg:h-[150vh]"
    >
      <Image
        // id="image"
        ref={imageRef}
        alt={alt}
        className={classNames(className, "scale-[1.4] origin-top")}
        {...rest}
      />
    </div>
  );
}
