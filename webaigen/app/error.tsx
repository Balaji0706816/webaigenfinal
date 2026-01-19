"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-zinc-600">{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-md border px-4 py-2 hover:bg-zinc-50"
      >
        Try again
      </button>
    </main>
  );
}
