export async function GET (req) {
  // log req url
  console.log(req.url)
  return Response.json({ status: 'ok' })
}
