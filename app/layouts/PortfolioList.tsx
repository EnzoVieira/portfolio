import { TriggerStaggerText } from "../components/TriggerStaggerText";
import { TriggerStaggerParagraph } from "../components/TriggerStaggerParagraph";
import { ParalaxImage } from "../components/ParalaxImage";
import Link from "next/link";
import { TriggerFadeIn } from "../components/TriggerFadeIn";
import { TransitionLink } from "@/components/TransitionLink";

const projects = [
  {
    image: "/invlance-banner.png",
    name: "Invlance",
    description: "Investment portfolio planning application",
    tags: ["Mobile", "App", "UX/UI", "Implementation", "Domain", "Marketing"],
  },
  {
    image: "/explorewings-banner.png",
    name: "Explorewings",
    description:
      "UI/UX project for Workshop at the University of Minho, Portugal",
    tags: ["Workshop", "UX/UI", "Web Design", "Figma"],
  },
  {
    image: "/splitbill-banner.png",
    name: "Split Bill",
    description: "Bill splitting app between friends",
    tags: ["Mobile", "UX/UI", "Design", "Figma"],
  },

  {
    image: "/eventsproducer-banner.png",
    name: "Event Producer",
    description: "Design for an event producer in São Luís, Brazil",
    tags: ["Workshop", "UX/UI", "Web Design", "Figma"],
  },
];

export function PortfolioList() {
  return (
    <section className="pt-16">
      <header>
        <TriggerStaggerParagraph as="span" className="font-medium">
          My Portfolio
        </TriggerStaggerParagraph>

        <TriggerStaggerText
          as="h3"
          className="text-4xl font-medium lg:text-6xl lg:leading-relaxed"
        >
          Web Developer Showcase
        </TriggerStaggerText>

        <TriggerStaggerParagraph>
          Check out my latest web development projects.
        </TriggerStaggerParagraph>
      </header>

      <ul className="grid gap-16 pt-20">
        {projects.map((project) => (
          <article
            key={project.name}
            className="grid gap-2 lg:grid-cols-2 lg:gap-4"
          >
            <ParalaxImage
              src={project.image}
              alt={project.description}
              fill
              style={{ objectFit: "cover" }}
            />

            <div className="lg:col-start-1 lg:row-start-1 lg:sticky lg:top-[calc(50vh-(233px/2))] lg:left-0 lg:h-fit">
              <TriggerStaggerText className="text-2xl font-medium lg:text-6xl lg:leading-relaxed">
                {project.name}
              </TriggerStaggerText>

              <TriggerStaggerParagraph>
                {project.description}
              </TriggerStaggerParagraph>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TriggerFadeIn
                    as="li"
                    key={tag}
                    className="flex items-center bg-gray-300 px-2 py-1 text-xs"
                  >
                    {tag}
                  </TriggerFadeIn>
                ))}
              </ul>

              <TransitionLink
                href={`/${project.name.toLowerCase().replace(" ", "-")}`}
                className="block mt-4 text-start lg:mt-16"
              >
                <TriggerFadeIn>View project &gt;</TriggerFadeIn>
              </TransitionLink>
            </div>
          </article>
        ))}
      </ul>
    </section>
  );
}
