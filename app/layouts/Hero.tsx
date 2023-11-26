import Image from "next/image";
import { StaggerText } from "../components/StaggerText";
import { StaggerParagraph } from "../components/StaggerParagraph";

export function Hero() {
  return (
    <section className="pt-8 grid gap-5 lg:h-[calc(100vh_-_72px)] lg:grid-cols-12 lg:auto-rows-fr">
      <StaggerParagraph className="lg:row-start-3 lg:col-span-6 lg:self-center">
        Welcome to my website portfolio. I specialize in creating clean and
        user-friendly web experiences that leave a lasting impression.
      </StaggerParagraph>

      <StaggerText className="lg:col-span-12">
        impactful <br className="hidden lg:block" /> web developer
      </StaggerText>

      <div className="w-full h-80 lg:h-full relative overflow-hidden lg:col-span-5 lg:row-start-2">
        <Image
          id="image"
          src="/me.jpg"
          alt="me"
          fill
          style={{ objectFit: "cover" }}
          className="animate-reveal-image object-left lg:object-top"
          priority
        />
      </div>

      <StaggerText className="lg:row-start-3 lg:col-span-4 lg:col-start-9">
        Enzo Vieira
      </StaggerText>
    </section>
  );
}
