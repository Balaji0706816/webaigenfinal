export async function GET() {
    return Response.json({ ok: true, service: "webaigen", time: new Date().toISOString() });
  }
  