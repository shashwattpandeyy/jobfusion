import { Router } from "express";
import crypto from "crypto";

export default function interviewRouter() {
  const router = Router();

  router.post("/schedule", async (req, res, next) => {
    console.log("GOT all the data");
    return res.send({ id: "212dsfk" });
  });

  router.get("/start/:session_id", async (req, res, next) => {
    console.log("Starting Interview", req.params);
    // TODO: check if session id exists
    console.log("Switching protocol");

    let magic_string = "258EAFA5-E001-47DA-95CA-C5AB0DC8";
    let websocket_key = req.headers["sec-websocket-key"];
    let concat_string = websocket_key + magic_string;
    var shasum = crypto.createHash("sha1");
    shasum.update(concat_string);
    let encrypted_data = shasum.digest("base64");

    res.set("Upgrade", "websocket");
    res.set("Connection", "Upgrade");
    res.set("Sec-WebSocket-Accept", encrypted_data);
    res.set("Sec-WebSocket-Version", 13);

    return res.status(101).send("Ok");
  });

  return router;
}
