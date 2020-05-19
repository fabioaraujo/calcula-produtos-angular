import { Item } from './../item';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControl } from '@angular/forms';

@Component({
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  itens: Item[];
  itemSelecionado: Item;
  id: number;
  nome: string;
  horasTrabalhadas: number;
  custo: number;
  itensSelecionados: Item[];

  constructor(  ) {

   }

  ngOnInit(): void {
    this.itens = [
      new Item(1, 'Item 1', 10, 0),
      new Item(2, 'Item 2', 5, 0),
      new Item(3, 'Item 3', 7, 0),
    ];
  }

  onSubmit(){
    this.custo = this.horasTrabalhadas * 10;
    for (const i in this.itensSelecionados){
      if (this.itensSelecionados.hasOwnProperty(i)) {
        const item = this.itensSelecionados[i];
        this.custo = this.custo + item.custo * item.quantidade;
      }
    }
    const produto = {
      id: this.id,
      nome: this.nome,
      horasTrabalhadas: this.horasTrabalhadas,
      custo: this.custo,
      itensSelecionados: this.itensSelecionados
    };
    console.log(produto);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  selecionaItem(item){
    console.log(item);
    if(!this.itensSelecionados){
      this.itensSelecionados = []
    }
    if(this.itensSelecionados.indexOf(item) === -1){
      this.itensSelecionados.push(item);
    }
    console.log(this.itensSelecionados);
  }


}
