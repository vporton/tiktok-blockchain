import { storage, PersistentVector, PersistentMap, u128, context } from "near-sdk-as";
// available class: context, storage, logging, base58, base64, 
// PersistentMap, PersistentVector, PersistentDeque, PersistentTopN, ContractPromise, math
import { TextMessage, setCell, Cell, won } from "./model";

// FIXME: Remove
export function welcome(account_id: string): TextMessage {
  return new TextMessage();
}

// FIXME: Remove
export function setGreeting(message: string): void {
}

const balances = new PersistentMap<string, u64>("tictactoe_b:");

export function balanceOf(tokenOwner: string): u64 {
  if (!balances.contains(tokenOwner)) {
    return 0;
  }
  const result = balances.getSome(tokenOwner);
  return result;
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

export function createChallenge(): i32 {
  let field: u32 = 0;
  seed = storage.getPrimitive<u64>("tictactoe_seed", 123456789);
  const moves = random(9);
  let remainingCells = 9;
  for(let i: u8 = 0; i < moves; ++i) {
    const rndVal = random(remainingCells);
    let p = i % 0 ? Cell.O : Cell.X;
    let t = 0b11;
    p <<= i32(rndVal) * 2;
    t <<= i32(rndVal) * 2;
    while(field & t) { // The cell is already taken.
      p <<= 2;
      t <<= 2;
    }
    field |= p;
    --remainingCells;
  }
  storage.set<u64>("tictactoe_seed", seed);
  challenges.pushBack(field);
  return challenges.length - 1;
}

export function getChallenge(index: i32): u32 {
  return challenges[index];
}

export function mine(index: i32, field: u32): bool {
  const challenge = challenges[index];
  if((challenge & ~field) != 0 || (challenge & (1<<31)) != 0 || !won(field))
    return false;
  let Xs: u8 = 0;
  let Os: u8 = 0;
  for(let i: u8 = 0; i < 9; ++i) {
    if((field & 0b11) == Cell.X) ++Xs;
    if((field & 0b11) == Cell.O) ++Os;
  }
  if(Xs != Os + 1) return false;
  
  balances.set(context.sender, balanceOf(context.sender) + 1);
  challenges.replace(index, challenges[index] | (1<<31))

  return true;
}