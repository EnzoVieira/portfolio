import Image from "next/image";

export function ContactMe() {
  return (
    <section className="py-16">
      <div className="flex items-baseline gap-2">
        <div>
          <div className="relative w-8 h-8 rounded-full overflow-hidden xs:h-10 xs:w-10">
            <Image src="/me.JPG" alt="me" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        <h2 className="text-4xl xs:text-5xl">
          <span>Let&apos;s work together</span>
        </h2>
      </div>

      <div className="my-8 flex flex-col">
        <span className="text-xs">Leave a message to</span>
        <span>
          <a href="mailto:dev@enzovieira.com" className="text-xl xs:text-3xl">
            <u>dev</u>
            <u>@enzovieira</u>
            <u>.com</u>
          </a>
        </span>
      </div>
    </section>
  );
}
