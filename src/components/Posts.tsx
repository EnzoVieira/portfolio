// src/components/Posts.tsx

import { TriggerFadeIn } from "@/app/components/TriggerFadeIn";
import { POSTS_QUERYResult } from "../../sanity.types";
import { TransitionLink } from "./TransitionLink";
import { ParalaxImage } from "@/app/components/ParalaxImage";
import { TriggerStaggerText } from "@/app/components/TriggerStaggerText";

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <ul className="grid gap-16 pt-20">
      {posts.map((post) => (
        <li key={post._id}>
          <article className="grid gap-2 lg:grid-cols-2 lg:gap-4">
            {/* <ParalaxImage
                        src={post.image}
                        alt={post.description}
                        fill
                        style={{ objectFit: "cover" }}
                      /> */}

            <div className="lg:col-start-1 lg:row-start-1 lg:sticky lg:top-[calc(50vh-(233px/2))] lg:left-0 lg:h-fit">
              <TriggerStaggerText className="text-2xl font-medium lg:text-6xl lg:leading-relaxed">
                {post.title ?? "Untitled"}
              </TriggerStaggerText>

              {/* <TriggerStaggerParagraph>
                          {project.description}
                        </TriggerStaggerParagraph> */}

              {/* <ul className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <TriggerFadeIn
                              as="li"
                              key={tag}
                              className="flex items-center bg-gray-300 px-2 py-1 text-xs"
                            >
                              {tag}
                            </TriggerFadeIn>
                          ))}
                        </ul> */}

              <TransitionLink
                // href={`/${post.title?.toLowerCase().replace(" ", "-")}`}
                href={`/posts/${post.slug?.current ?? "/posts/invlance"}`}
                className="block mt-4 text-start lg:mt-16"
              >
                <TriggerFadeIn>View project &gt;</TriggerFadeIn>
              </TransitionLink>
            </div>
          </article>
          {/* <a
            className="block p-4 hover:bg-blue-50"
            href={`/posts/${post?.slug?.current}`}
          >
            {post?.title ?? "Untitled"}
          </a> */}
        </li>
      ))}
    </ul>
  );
}
