export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({ message: "" }));
  const message = typeof body?.message === "string" ? body.message : "";

  const reply = message
    ? `Received: "${message}". Connect AI provider next.`
    : "Send { message: string }";

  return Response.json({ ok: true, reply });
}
