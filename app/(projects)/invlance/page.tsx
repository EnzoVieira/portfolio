import Image from "next/image";

export default function InvlancePage() {
  return (
    <main>
      <h1 className="text-5xl">Invlance</h1>

      <dl className="pt-10">
        <dt className="text-xs opacity-50 uppercase border-b-[1px] border-black border-opacity-25 pb-4 mb-4">
          Role / Services
        </dt>
        <dd className="pb-8">Design &amp; Development</dd>

        <dt className="text-xs opacity-50 uppercase border-b-[1px] border-black border-opacity-25 pb-4 mb-4">
          Briefing
        </dt>
        <dd className="pb-8">Investment portfolio planning application</dd>

        <dt className="text-xs opacity-50 uppercase border-b-[1px] border-black border-opacity-25 pb-4 mb-4">
          Year
        </dt>
        <dd className="pb-8">2020</dd>
      </dl>

      <p className="pb-2">
        The premise of the project is to convey a feeling of technology and
        confidence. To be an application for investors who seek security when
        choosing their investments. The investor only needs to choose the shares
        they want to evaluate and define some evaluation criteria for each one.
        After that, based on the criteria score, the application automatically
        balanced the person&apos;s investment portfolio.
      </p>

      <div className="text-8xl text-center pb-20">&darr;</div>

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
