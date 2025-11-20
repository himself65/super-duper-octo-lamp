export async function GET (req: never) {
  // log req url
  console.log(req)
  return Response.json({ status: 'ok' })
}
