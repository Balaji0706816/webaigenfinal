// TODO: Implement Navbar and Footer components or update import paths as needed.
// import Navbar from "../../components/layout/navbar";
// import Footer from "../../components/layout/footer";

const Navbar = () => (
  <nav className="w-full border-b py-4 px-6 bg-white">
    <div className="mx-auto max-w-6xl flex justify-between items-center">
      <a href="/" className="text-xl font-bold tracking-tight text-zinc-900">webaigen</a>
      <div className="space-x-4">
        <a href="/services" className="hover:underline text-zinc-600">Services</a>
        <a href="/pricing" className="hover:underline text-zinc-600">Pricing</a>
        <a href="/contact" className="hover:underline text-zinc-600">Contact</a>
        <a href="/dashboard" className="hover:underline text-zinc-600">Dashboard</a>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="w-full border-t py-6 mt-12 bg-zinc-50">
    <div className="mx-auto max-w-6xl px-6 text-center text-sm text-zinc-500">
      &copy; {new Date().getFullYear()} webaigen. All rights reserved.
    </div>
  </footer>
);

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
      <Footer />
    </div>
  );
}
