// TODO: Replace with actual sections once available. Using placeholders for now.
function Hero() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Your Modern AI Website Starts Here</h1>
      <p className="text-zinc-600 mb-8">AI-powered websites, automations, and integrations for your business.</p>
      <a
        href="/contact"
        className="inline-block rounded bg-zinc-900 text-white px-6 py-3 font-medium hover:bg-zinc-700"
      >
        Get Started
      </a>
    </section>
  );
}

function Features() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold text-center mb-8">Features</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        <div className="rounded-xl border p-6">
          <h3 className="font-semibold mb-2">AI Chatbots</h3>
          <p className="text-zinc-600">Engage visitors and capture leads 24/7 with custom AI chatbots.</p>
        </div>
        <div className="rounded-xl border p-6">
          <h3 className="font-semibold mb-2">Modern Websites</h3>
          <p className="text-zinc-600">Enjoy blazing-fast, SEO-optimized websites built with Next.js.</p>
        </div>
        <div className="rounded-xl border p-6">
          <h3 className="font-semibold mb-2">Automations & Integrations</h3>
          <p className="text-zinc-600">Automate workflows and connect your favorite tools (like Stripe, HubSpot, and more).</p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-12 bg-zinc-50">
      <h2 className="text-2xl font-semibold text-center mb-8">What Our Clients Say</h2>
      <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
        <blockquote className="rounded-xl border p-6 bg-white">
          <p className="text-zinc-700 italic">
            "Webaigen launched our new site and AI bot in under two weeks. Leads are up 40%!"
          </p>
          <footer className="mt-4 text-zinc-600">— Taylor G.</footer>
        </blockquote>
        <blockquote className="rounded-xl border p-6 bg-white">
          <p className="text-zinc-700 italic">
            "Easy process, stunning results. Their automations save us hours every week."
          </p>
          <footer className="mt-4 text-zinc-600">— Priya S.</footer>
        </blockquote>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">Ready to launch?</h2>
      <p className="text-zinc-600 mb-6">Let's chat about your project and see how AI can help your business grow.</p>
      <a
        href="/contact"
        className="inline-block rounded bg-zinc-900 text-white px-6 py-3 font-medium hover:bg-zinc-700"
      >
        Contact Us
      </a>
    </section>
  );
}

export default function MarketingHome() {
  return (
    <div className="space-y-12">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}
