import { includes } from "lodash-es";

export default function respond(req, res, next) {
  const data = res.locals["data"];
  
  if (includes(['/register'], req.url)) { 
    return res.status(201).send()
  }
  
  console.log('data', data)
  return res.json(data)
}