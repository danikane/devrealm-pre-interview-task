import { SET_PIN } from "../constants/action-types";

export function setPin(payload) {
  return { type: SET_PIN, payload };
}
