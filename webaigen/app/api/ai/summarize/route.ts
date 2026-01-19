export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({ text: "" }));
  const text = typeof body?.text === "string" ? body.text : "";

  const summary =
    text.length > 0 ? `${text.slice(0, 160)}${text.length > 160 ? "..." : ""}` : "";

  return Response.json({ ok: true, summary });
}
