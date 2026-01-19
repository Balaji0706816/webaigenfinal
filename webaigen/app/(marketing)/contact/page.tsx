// TODO: Implement a ContactForm or import from the correct path. Using a placeholder for now.

function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block font-medium mb-1" htmlFor="name">Name</label>
        <input id="name" name="name" className="w-full border rounded p-2" required />
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="w-full border rounded p-2" required />
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="message">Message</label>
        <textarea id="message" name="message" className="w-full border rounded p-2" rows={5} required />
      </div>
      <button type="submit" className="mt-2 rounded bg-zinc-900 text-white px-4 py-2 hover:bg-zinc-700">
        Send
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-zinc-600">Send a message and we’ll get back to you.</p>
      <div className="mt-6 max-w-xl">
        <ContactForm />
      </div>
    </div>
  );
}
