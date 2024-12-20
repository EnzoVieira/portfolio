import Image from "next/image";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERYResult } from "../../sanity.types";
import { StaggerText } from "@/app/components/StaggerText";
import { StaggerParagraph } from "@/app/components/StaggerParagraph";
import { FadeIn } from "@/app/components/FadeIn";

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <Image
        className="aspect-video object-contain mt-8 mx-auto"
        src={urlFor(value.asset?._ref).url()}
        width={600}
        height={600}
        alt=""
      />
    ),
  },
  block: {
    normal: ({ children }) => (
      <span className="block">
        <StaggerParagraph>{children}</StaggerParagraph>
      </span>
    ),
  },
};

export function Post({ post }: { post: POST_QUERYResult }) {
  const { title, mainImage, briefing, body, functionPerformed, categories } =
    post || {};

  return (
    <main className="">
      <StaggerText className="normal-case leading-relaxed">{title}</StaggerText>
      <dl className="pt-8 flex-1">
        <dt className="text-xs opacity-50 uppercase">
          <StaggerParagraph>Role / Services</StaggerParagraph>
        </dt>
        <div className="scale-x-0 h-[1px] w-full bg-black opacity-[.15] animate-divider-scale origin-left my-4" />
        <dd className="pb-8">
          <StaggerParagraph>{functionPerformed}</StaggerParagraph>
        </dd>

        <dt className="text-xs opacity-50 uppercase ">
          <StaggerParagraph>Briefing</StaggerParagraph>
        </dt>
        <div className="scale-x-0 h-[1px] w-full bg-black opacity-[.15] animate-divider-scale origin-left my-4" />
        <dd className="pb-8">
          <StaggerParagraph>{briefing}</StaggerParagraph>
        </dd>

        <dt className="text-xs opacity-50 uppercase">
          <StaggerParagraph>Tags</StaggerParagraph>
        </dt>
        <div className="scale-x-0 h-[1px] w-full bg-black opacity-[.15] animate-divider-scale origin-left my-4" />
        <dd className="pb-8">
          <ul className="flex flex-wrap gap-2">
            {categories?.map((category) => (
              <li key={category.title}>
                <FadeIn className="flex items-center bg-gray-300 px-2 py-1 text-xs">
                  {category.title}
                </FadeIn>
              </li>
            ))}
          </ul>
        </dd>
      </dl>

      <div className="prose mt-8 prose-lg mx-auto">
        {mainImage?.asset?._ref ? (
          <FadeIn className="w-40">
            <Image
              className="float-left m-0 mr-4 rounded-lg"
              priority
              src={urlFor(mainImage?.asset?._ref).width(300).height(300).url()}
              width={300}
              height={300}
              alt={mainImage.alt ?? ""}
            />
          </FadeIn>
        ) : null}

        {body ? (
          <PortableText value={body} components={myPortableTextComponents} />
        ) : null}
      </div>

      <hr className="my-16" />
    </main>
  );
}
