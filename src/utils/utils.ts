import LCGenerator from "./lc-generator"

/**
 * Selectionne n valeurs aléatoirement depuis le tableau from
 * 
 * @param from 
 * @param n 
 * @returns 
 */
export function randomPick<T>(from: Array<T>, n: number) {

  const period = 60*1000; // chaque minute
  const timestamp = new Date().getTime() / period;
  const seed = Math.floor(timestamp);
  const lcg = new LCGenerator(seed);

  // copier le tableau original pour ne pas le modifier
  const copy = Array.from({
    length: from.length
  } , (_: number, index: number) => from[index])

  for(let i=0; i <= copy.length - 1  ; ++i){
    const j = lcg.range(i, copy.length - 1);
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp; 
  }
  return copy.slice(-n);
}