import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          webaigen
        </Link>

        <nav className="flex gap-3 text-sm">
          <Link className="rounded-md px-3 py-2 hover:bg-zinc-50" href="/services">Services</Link>
          <Link className="rounded-md px-3 py-2 hover:bg-zinc-50" href="/pricing">Pricing</Link>
          <Link className="rounded-md px-3 py-2 hover:bg-zinc-50" href="/contact">Contact</Link>
          <Link className="rounded-md border px-3 py-2 hover:bg-zinc-50" href="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
