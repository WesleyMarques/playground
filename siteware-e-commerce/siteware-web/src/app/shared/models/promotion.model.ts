import { Resource } from '../resource';

export abstract class Promotion extends Resource {
  quantidade: number;
  type: string;

  constructor(quantidade: number, type: string) {
    super();
    this.quantidade = quantidade;
    this.type = type;
  }

  abstract calcDiscount(qtd:number, price:number):number;
}
