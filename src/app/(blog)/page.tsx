import { ContactMe } from "../layouts/ContactMe";
import { Hero } from "../layouts/Hero";
import { PortfolioList } from "../layouts/PortfolioList";

import { Posts } from "@/components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <main>
      <Hero />

      {/* <PortfolioList /> */}
      <Posts posts={posts} />

      <ContactMe />
    </main>
  );
}
