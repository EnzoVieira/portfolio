import { TriggerStaggerText } from "../components/TriggerStaggerText";
import { TriggerStaggerParagraph } from "../components/TriggerStaggerParagraph";
import { ParalaxImage } from "../components/ParalaxImage";

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
    image: "/eventsproducer-banner.jpeg",
    name: "Event Producers Website",
    description: "Design for an event producer in São Luís, Brazil",
    tags: ["Workshop", "UX/UI", "Web Design", "Figma"],
  },
];

export function PortfolioList() {
  return (
    <section className="pt-16">
      <header className="flex flex-col gap-3">
        <span className="font-medium">My Portfolio</span>

        <h3 className="text-4xl font-medium lg:text-6xl">
          Web Developer Showcase
        </h3>

        <p>Check out my latest web development projects.</p>
      </header>

      <ul className="grid gap-16 pt-20">
        {projects.map((project) => (
          <div key={project.name} className="lg:h-screen h-fit">
            <article className="grid gap-2 lg:grid-cols-2 lg:gap-4">
              <div className="aspect-[4/3] relative overflow-hidden lg:aspect-square lg:col-start-2">
                <ParalaxImage
                  src={project.image}
                  alt={project.description}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="lg:col-start-1 lg:row-start-1 lg:sticky lg:top-[calc(50vh-60px)] lg:left-0 lg:h-fit">
                <TriggerStaggerText className="text-2xl font-medium lg:text-4xl lg:leading-relaxed">
                  {project.name}
                </TriggerStaggerText>

                <TriggerStaggerParagraph>
                  {project.description}
                </TriggerStaggerParagraph>

                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex items-center bg-gray-300 px-2 py-1 text-xs"
                    >
                      <TriggerStaggerParagraph>{tag}</TriggerStaggerParagraph>
                    </li>
                  ))}
                </ul>

                <button className="mt-4 text-start lg:mt-16">
                  View project &gt;
                </button>
              </div>
            </article>
          </div>
        ))}
      </ul>
    </section>
  );
}
