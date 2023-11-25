import Image from "next/image";
import { StaggerText } from "./components/StaggerText";
import { StaggerParagraph } from "./components/StaggerParagraph";

export default function Home() {
  return (
    <main className="pt-8 grid gap-5">
      <StaggerParagraph>
        Welcome to my website portfolio. I specialize in creating clean and
        user-friendly web experiences that leave a lasting impression.
      </StaggerParagraph>

      <StaggerText>impactful web developer</StaggerText>

      <div className="w-full h-80 relative overflow-hidden">
        <Image
          id="image"
          src="/me.JPEG"
          alt="me"
          layout="fill"
          objectFit="cover"
          className="animate-reveal-image object-bottom"
        />
      </div>

      <StaggerText>Enzo Vieira</StaggerText>
    </main>
  );
}
