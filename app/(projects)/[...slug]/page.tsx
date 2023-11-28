import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";

import { StaggerParagraph } from "@/app/components/StaggerParagraph";
import { StaggerText } from "@/app/components/StaggerText";
import { Mdx } from "@/components/mdx-components";
import { FadeIn } from "@/app/components/FadeIn";

interface ProjectProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: ProjectProps["params"]) {
  const slug = params?.slug?.join("/");
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) {
    null;
  }

  return project;
}

// export async function generateMetadata({
//   params,
// }: ProjectProps): Promise<Metadata> {
//   const post = await getProjectFromParams(params);

//   if (!post) {
//     return {};
//   }

//   return {
//     title: post.title,
//     description: post.description,
//   };
// }

export async function generateStaticParams(): Promise<
  ProjectProps["params"][]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }));
}

export default async function InvlancePage({ params }: ProjectProps) {
  const project = await getProjectFromParams(params);

  if (!project) {
    return notFound();
  }

  return (
    <main>
      <StaggerText className="normal-case leading-relaxed">
        {project.title}
      </StaggerText>

      <dl className="pt-8">
        <dt className="text-xs opacity-50 uppercase">
          <StaggerParagraph>Role / Services</StaggerParagraph>
        </dt>
        <div className="scale-x-0 h-[1px] w-full bg-black opacity-[.15] animate-divider-scale origin-left my-4" />
        <dd className="pb-8">
          <StaggerParagraph>{project.role}</StaggerParagraph>
        </dd>

        <dt className="text-xs opacity-50 uppercase ">
          <StaggerParagraph>Briefing</StaggerParagraph>
        </dt>
        <div className="scale-x-0 h-[1px] w-full bg-black opacity-[.15] animate-divider-scale origin-left my-4" />
        <dd className="pb-8">
          <StaggerParagraph>{project.briefing}</StaggerParagraph>
        </dd>

        <dt className="text-xs opacity-50 uppercase">
          <StaggerParagraph>Tags</StaggerParagraph>
        </dt>
        <div className="scale-x-0 h-[1px] w-full bg-black opacity-[.15] animate-divider-scale origin-left my-4" />
        <dd className="pb-8">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <FadeIn className="flex items-center bg-gray-300 px-2 py-1 text-xs">
                  {tag}
                </FadeIn>
              </li>
            ))}
          </ul>
        </dd>

        <dt className="text-xs opacity-50 uppercase">
          <StaggerParagraph>Year</StaggerParagraph>
        </dt>
        <div className="scale-x-0 h-[1px] w-full bg-black opacity-[.15] animate-divider-scale origin-left my-4" />
        <dd className="pb-8">
          <StaggerParagraph>{project.year}</StaggerParagraph>
        </dd>
      </dl>

      <StaggerParagraph className="pb-2">
        {project.description}
      </StaggerParagraph>

      <StaggerParagraph className="text-8xl text-center pb-20">
        &darr;
      </StaggerParagraph>

      <hr className="my-4" />
      <Mdx code={project.body.code} />
    </main>
  );
}
