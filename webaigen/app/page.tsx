import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight">webaigen</h1>

      <p className="mt-3 max-w-2xl text-zinc-600">
        AI automation + modern web services for businesses.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link className="rounded-md border px-4 py-2 hover:bg-zinc-50" href="/services">
          Services
        </Link>
        <Link className="rounded-md border px-4 py-2 hover:bg-zinc-50" href="/pricing">
          Pricing
        </Link>
        <Link className="rounded-md border px-4 py-2 hover:bg-zinc-50" href="/contact">
          Contact
        </Link>
        <Link className="rounded-md border px-4 py-2 hover:bg-zinc-50" href="/dashboard">
          Dashboard
        </Link>
      </div>
    </main>
  );
}
