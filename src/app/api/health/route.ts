export async function GET() {
  return Response.json({
    ok: true,
    service: "presencia-digital-express",
    time: new Date().toISOString(),
  });
}
