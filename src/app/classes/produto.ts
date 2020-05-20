import { Item } from './item';
export class Produto {
  constructor(
    public id: number,
    public nome: string,
    public horasTrabalhadas: number,
    public itensSelecionados: Item[],
    public custo: number
  ){}
}
