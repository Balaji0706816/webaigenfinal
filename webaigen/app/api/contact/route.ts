export async function POST(req: Request) {
    const data = await req.formData();
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
  
    // TODO: send email / store lead (Resend, Postgres, etc.)
    return Response.json({ ok: true, received: { name, email, message } });
  }
  