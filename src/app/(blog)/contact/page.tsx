"use client";

import { useState } from "react";

export default function ContactPage() {
  const [values, setValues] = useState({
    name: "",
    topic: "",
    company: "",
    duration: "",
    budget: "",
    phone: "",
    email: "",
    signature: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const email = "dev@enzovieira.com";
  const subject = encodeURIComponent("Discussion about Web Development");
  const body = encodeURIComponent(`
Hey, Enzo!

My name is ${values.name} and I'd like to discuss about ${values.topic} for my company, that's called ${values.company}. 
It's a project that will take ${values.duration}. A budget of ${values.budget} was set aside.

I look forward to hearing from you at ${values.phone} or ${values.email}.

Best regards,
${values.signature}.
  `);

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <main>
      <form className="text-4xl font-medium" action="">
        <span>Hey, Enzo!</span>
        <br />
        <br />
        <span>My name is</span>
        <span className="text-gray-400 relative px-2">
          {values.name || "type your name"}
          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-none"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </span>
        <span>and I&apos;d to discuss about</span>
        <span className="text-gray-400 relative px-2">
          {values.topic || "web development"}
          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-none"
            type="text"
            name="topic"
            value={values.topic}
            onChange={handleChange}
          />
        </span>
        <span>for my company, that&apos;s called</span>
        <span className="text-gray-400 relative px-2">
          {values.company || "your company"}
          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-none"
            type="text"
            name="company"
            value={values.company}
            onChange={handleChange}
          />
        </span>
        <span>It&apos;s a project that will take</span>
        <span className="text-gray-400 relative px-2">
          {values.duration || "30 days"}
          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-none"
            type="text"
            name="duration"
            value={values.duration}
            onChange={handleChange}
          />
        </span>
        <span>. A budget of </span>
        <span className="text-gray-400 relative px-2 inline-block">
          {values.budget || "1.000€ - 5.000€"}
          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-none"
            type="text"
            name="budget"
            value={values.budget}
            onChange={handleChange}
          />
        </span>
        <span>was set aside. </span>
        <span>I look forward to hearing from you at</span>
        <span className="text-gray-400 relative px-2 inline-block">
          {values.phone || "+351 999 999 999"}
          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-none"
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </span>
        <span>or</span>
        <span className="text-gray-400 relative px-2">
          {values.email || "your@email.com"}
          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-none"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </span>
        .
        <br />
        <br />
        <span>Best regards,</span>
        <br />
        <br />
        <span className="text-gray-400 relative px-2">
          {values.signature || "your signature"}
          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-none"
            type="text"
            name="signature"
            value={values.signature}
            onChange={handleChange}
          />
        </span>
        .
      </form>

      <div className="pt-16">
        <a
          className="bg-primary text-white px-3.5 py-2.5 rounded-sm"
          href={mailtoLink}
        >
          Send e-mail
        </a>
      </div>
    </main>
  );
}
