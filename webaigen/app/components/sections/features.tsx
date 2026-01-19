export default function Features() {
    const items = [
      { title: "Automation", desc: "Reduce manual work with workflows & integrations." },
      { title: "AI Assistants", desc: "Support, lead capture, and internal tools." },
      { title: "Modern Web", desc: "Fast, SEO-ready Next.js sites built for scale." },
    ];
  
    return (
      <section>
        <h2 className="text-2xl font-bold">What we deliver</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border p-5">
              <p className="font-semibold">{it.title}</p>
              <p className="mt-2 text-sm text-zinc-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  