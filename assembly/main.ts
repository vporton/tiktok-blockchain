import { context, logging, storage } from "near-sdk-as";
// available class: context, storage, logging, base58, base64, 
// PersistentMap, PersistentVector, PersistentDeque, PersistentTopN, ContractPromise, math
import { TextMessage } from "./model";

export function welcome(account_id: string): TextMessage {
  return new TextMessage();
}

export function setGreeting(message: string): void {
}
