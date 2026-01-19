export default function PricingPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold">Pricing</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Starting points. Final pricing depends on scope, integrations, and timeline.
        </p>
  
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border p-4">
            <h2 className="font-semibold">Starter Website</h2>
            <p className="mt-2 text-zinc-600">Landing page + contact + basic SEO</p>
          </div>
          <div className="rounded-xl border p-4">
            <h2 className="font-semibold">AI Assistant</h2>
            <p className="mt-2 text-zinc-600">Website chatbot + FAQ + lead capture</p>
          </div>
          <div className="rounded-xl border p-4">
            <h2 className="font-semibold">Business Automation</h2>
            <p className="mt-2 text-zinc-600">Workflows, integrations, reporting</p>
          </div>
        </div>
      </div>
    );
  }
  