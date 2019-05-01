import { Resource } from '../resource';

export abstract class Promotion extends Resource {
  quantidade: number;
  label: string;

  constructor(quantidade: number, label: string) {
    super();
    this.quantidade = quantidade;
    this.label = label;
  }

  abstract calcDiscount(qtd:number, price:number):number;
}
