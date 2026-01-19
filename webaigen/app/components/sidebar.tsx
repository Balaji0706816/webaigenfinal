import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="border-r px-6 py-10">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <nav className="mt-4 grid gap-2 text-sm">
        <Link className="rounded-md px-3 py-2 hover:bg-zinc-50" href="/dashboard">Overview</Link>
        <Link className="rounded-md px-3 py-2 hover:bg-zinc-50" href="/settings">Settings</Link>
        <Link className="rounded-md px-3 py-2 hover:bg-zinc-50" href="/">← Marketing</Link>
      </nav>
    </aside>
  );
}
