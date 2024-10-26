import { get } from "lodash-es";
import InvalidPayloadException from "../exceptions/invalidPayload.js";

export default function validatePayload(schema, payload) {
  const { error } = schema.validate(payload);
 
  if (error) { 
    const message = get(error, 'details[0].message')
    throw new InvalidPayloadException(message);
  }
}