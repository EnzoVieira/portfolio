import Image from "next/image";

import { StaggerParagraph } from "@/app/components/StaggerParagraph";
import { StaggerText } from "@/app/components/StaggerText";

export default function InvlancePage() {
  return (
    <main>
      <StaggerText className="normal-case">Invlance</StaggerText>

      <dl className="pt-10">
        <dt className="text-xs opacity-50 uppercase">
          <StaggerParagraph>Role / Services</StaggerParagraph>
        </dt>
        <div className="scale-x-0 h-[1px] w-full bg-black opacity-[.15] animate-divider-scale origin-left my-4" />
        <dd className="pb-8">
          <StaggerParagraph>Design &amp; Development</StaggerParagraph>
        </dd>

        <dt className="text-xs opacity-50 uppercase ">
          <StaggerParagraph>Briefing</StaggerParagraph>
        </dt>
        <div className="scale-x-0 h-[1px] w-full bg-black opacity-[.15] animate-divider-scale origin-left my-4" />
        <dd className="pb-8">
          <StaggerParagraph>
            Investment portfolio planning application
          </StaggerParagraph>
        </dd>

        <dt className="text-xs opacity-50 uppercase">
          <StaggerParagraph>Year</StaggerParagraph>
        </dt>
        <div className="scale-x-0 h-[1px] w-full bg-black opacity-[.15] animate-divider-scale origin-left my-4" />
        <dd className="pb-8">
          <StaggerParagraph>2020</StaggerParagraph>
        </dd>
      </dl>

      <StaggerParagraph className="pb-2">
        The premise of the project is to convey a feeling of technology and
        confidence. To be an application for investors who seek security when
        choosing their investments. The investor only needs to choose the shares
        they want to evaluate and define some evaluation criteria for each one.
        After that, based on the criteria score, the application automatically
        balanced the person&apos;s investment portfolio.
      </StaggerParagraph>

      <StaggerParagraph className="text-8xl text-center pb-20">
        &darr;
      </StaggerParagraph>

      <section className="flex items-center bg-[#8A05FF] w-screen -mx-4 py-24">
        <div className="relative w-full h-60">
          <Image
            src="/invlance/screen-5.png"
            alt="screen-1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative w-full h-60">
          <Image
            src="/invlance/screen-6.png"
            alt="screen-1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative w-full h-60">
          <Image
            src="/invlance/screen-6.png"
            alt="screen-1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>

      <section className="flex items-center bg-white w-screen -mx-4 py-24">
        <div className="relative w-full h-80">
          <Image
            src="/invlance/screen-1.png"
            alt="screen-1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative w-full h-80">
          <Image
            src="/invlance/screen-2.png"
            alt="screen-1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section className="flex items-center bg-white w-screen -mx-4 py-24">
        <div className="relative w-full h-80">
          <Image
            src="/invlance/screen-3.png"
            alt="screen-1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative w-full h-80">
          <Image
            src="/invlance/screen-4.png"
            alt="screen-1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    </main>
  );
}
