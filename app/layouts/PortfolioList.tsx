import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: "/invlance-banner.png",
    name: "Invlance",
    description: "Investment portfolio planning application",
    tags: ["Mobile", "App", "UX/UI", "Implementation", "Domain"],
  },
];

export function PortfolioList() {
  return (
    <section className="pt-16">
      <header className="flex flex-col gap-3">
        <span className="font-medium">My Portfolio</span>

        <h3 className="text-4xl font-medium">Web Developer Showcase</h3>

        <p>Check out my latest web development projects.</p>
      </header>

      <ul className="pt-8">
        {projects.map((project) => (
          <article key={project.name} className="grid gap-2">
            <div className="aspect-[4/3] bg-gray-400 relative">
              <Image
                src={project.image}
                alt={project.description}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <h2 className="text-2xl font-medium">{project.name}</h2>

            <p>{project.description}</p>

            <ul className="flex gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="flex items-center bg-gray-300 px-2 py-1 text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <button className="mt-4 text-start">View project &gt;</button>
          </article>
        ))}
      </ul>
    </section>
  );
}
