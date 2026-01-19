import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-zinc-600">
        The page you’re looking for doesn’t exist.
      </p>
      <Link className="mt-6 inline-block rounded-md border px-4 py-2 hover:bg-zinc-50" href="/">
        Go home
      </Link>
    </main>
  );
}
