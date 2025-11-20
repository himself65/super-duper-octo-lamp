export async function GET (req: any) {
  // log req url
  console.log(req.url)
  return Response.json({ status: 'ok' })
}
