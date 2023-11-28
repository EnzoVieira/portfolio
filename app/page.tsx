import { ContactMe } from "./layouts/ContactMe";
import { Hero } from "./layouts/Hero";
import { PortfolioList } from "./layouts/PortfolioList";

export default function Home() {
  return (
    <main>
      <Hero />

      <PortfolioList />

      <ContactMe />
    </main>
  );
}
