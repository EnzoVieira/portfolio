"use client"

import { useState } from "react"

interface IPlaceholderProps {
  value: string
  fallback: string
}

function Placeholder({ value, fallback }: IPlaceholderProps) {
  return value ? (
    <span>{value}</span>
  ) : (
    <span className="text-gray-400">{fallback}</span>
  )
}

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
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const email = "dev@enzovieira.com"
  const subject = encodeURIComponent("Discussion about Web Development")
  const body = encodeURIComponent(`
Hey, Enzo!

My name is ${values.name} and I'd like to discuss about ${values.topic} for my company, that's called ${values.company}. 
It's a project that will take ${values.duration}. A budget of ${values.budget} was set aside.

I look forward to hearing from you at ${values.phone} or ${values.email}.

Best regards,
${values.signature}.
  `)

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`

  return (
    <main>
      <form className="text-4xl font-medium" action="">
        <span>Hey, Enzo!</span>
        <br />
        <br />
        <span>My name is</span>
        <span className="relative px-2">
          <Placeholder value={values.name} fallback="type your name" />
          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-hidden"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </span>
        <span>and I&apos;d to discuss about</span>
        <span className="relative px-2">
          <Placeholder value={values.topic} fallback="web development" />
          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-hidden"
            type="text"
            name="topic"
            value={values.topic}
            onChange={handleChange}
          />
        </span>
        <span>for my company, that&apos;s called</span>
        <span className="relative px-2">
          <Placeholder value={values.company} fallback="your company" />

          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-hidden"
            type="text"
            name="company"
            value={values.company}
            onChange={handleChange}
          />
        </span>
        <span>. It&apos;s a project that will take</span>
        <span className="relative px-2">
          <Placeholder value={values.duration} fallback="30 days" />

          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-hidden"
            type="text"
            name="duration"
            value={values.duration}
            onChange={handleChange}
          />
        </span>
        <span>. A budget of </span>
        <span className="relative px-2 inline-block">
          <Placeholder value={values.budget} fallback="1.000€ - 5.000€" />

          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-hidden"
            type="text"
            name="budget"
            value={values.budget}
            onChange={handleChange}
          />
        </span>
        <span>was set aside. </span>
        <span>I look forward to hearing from you at</span>
        <span className="relative px-2 inline-block">
          <Placeholder value={values.phone} fallback="+351 999 999 999" />

          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-hidden"
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </span>
        <span>or</span>
        <span className="relative px-2">
          <Placeholder value={values.email} fallback="your@email.com" />

          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-hidden"
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
        <span className="relative px-2">
          <Placeholder value={values.signature} fallback="your signature" />

          <input
            className="px-2 absolute inset-0 w-full bg-transparent caret-black text-transparent border-none focus:outline-hidden"
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
          className="bg-primary text-white px-3.5 py-2.5 rounded-xs"
          href={mailtoLink}
        >
          Send e-mail
        </a>
      </div>
    </main>
  )
}
