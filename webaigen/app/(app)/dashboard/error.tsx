"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="rounded-xl border p-4">
      <p className="font-semibold">Dashboard error</p>
      <p className="mt-2 text-zinc-600">{error.message}</p>
      <button onClick={reset} className="mt-4 rounded-md border px-3 py-2 hover:bg-zinc-50">
        Retry
      </button>
    </div>
  );
}
