export default function ContactForm() {
    return (
      <form action="/api/contact" method="post" className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Name</span>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Your name"
          />
        </label>
  
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="you@company.com"
          />
        </label>
  
        <label className="block">
          <span className="text-sm font-medium">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Tell us what you need…"
          />
        </label>
  
        <button className="rounded-md border px-4 py-2 hover:bg-zinc-50" type="submit">
          Send
        </button>
      </form>
    );
  }
  