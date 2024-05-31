
/**
 * Implémentation d'un generateur de nombre
 * aléatoires LCG 
 * https://en.wikipedia.org/wiki/Linear_congruential_generator 
 */
export default class LCGenerator {

  private modulus: number;
  private multiplier: number;
  private increment: number;
  private state: number;

  constructor(seed: number){

    // Paramètres obtenus sur
    // https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-00996-5/S0025-5718-99-00996-5.pdf
    this.modulus = 2147483647; 
    this.multiplier = 1583458089;
    this.increment = 0;
    this.state = seed;

    //console.log({state: this.state})
  }

  nextInt(): number{
    this.state = (this.multiplier * this.state + this.increment) % this.modulus;
    /*this.state &= 0x7FFFFFFF;*/
    return this.state;
  }

  range(start: number, end: number) {
    const max = Math.max(start, end);
    const min = Math.min(start, end);
    return min + (this.nextInt() % (1 + max - min));
  }

  rangeRel(start: number, end: number) {
    const max = Math.max(start, end);
    const min = Math.min(start, end);
    const d = min < 0 ? -min : 0;
    if(d + min != 0){ 
      // min est positif, donc les deux sont positifs
      // on utilise le range de base
      return min + (this.nextInt() % (1 + max - min));
    } else { 
      return this.nextInt() % (1 + d + max) - d;
    }
  }
}