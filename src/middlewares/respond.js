export default function respond(req, res, next) {
  const data = req["locals"];
  
  return res.status(200).send(data)
}