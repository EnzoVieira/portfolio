import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Project not found
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          Oops! Project under construction 🛠️. Explore others in the meantime.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="underline underline-offset-2 rounded-md px-3.5 py-2.5 text-sm"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
