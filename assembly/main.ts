import { storage, PersistentVector } from "near-sdk-as";
// available class: context, storage, logging, base58, base64, 
// PersistentMap, PersistentVector, PersistentDeque, PersistentTopN, ContractPromise, math
import { TextMessage, setCell } from "./model";

// FIXME: Remove
export function welcome(account_id: string): TextMessage {
  return new TextMessage();
}

// FIXME: Remove
export function setGreeting(message: string): void {
}

// low bits are a TicTacToe field, highest bit is bool for mined.
const challenges: PersistentVector<u32> = new PersistentVector<u32>("tictactoe_challenges");

let seed: u64 = 123456789;

function rand(): u64 {
  return seed = (1103515245 * seed + 12345) % (1<<31);
}

function random(max: u64): u64 {
  return rand() * max / (1<<31);
}

export function obtainChallenge() {
  let field: u32 = 0;
  seed = storage.getPrimitive<u64>("tictactoe_seed", 123456789);
  const moves = random(9);
  let remainingCells = 9;
  for(let i: u8 = 0; i < moves; ++i) {
    const rndVal = random(remainingCells);
    
  }
  storage.set<u64>("tictactoe_seed", seed);
}

export function mine(index: u64, file: u32) {

}