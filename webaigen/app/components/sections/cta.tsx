import Link from "next/link";

export default function CTA() {
  return (
    <section className="rounded-2xl border p-6">
      <h2 className="text-2xl font-bold">Ready to build?</h2>
      <p className="mt-3 text-zinc-600">Let’s discuss your goals and timeline.</p>
      <Link className="mt-4 inline-block rounded-md border px-4 py-2 hover:bg-zinc-50" href="/contact">
        Contact us
      </Link>
    </section>
  );
}
