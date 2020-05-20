import { ItemService } from './../item.service';
import { Item } from './../item';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControl } from '@angular/forms';

@Component({
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  itens;
  itemSelecionado: Item;
  id: number;
  nome: string;
  horasTrabalhadas: number;
  custo: number;
  itensSelecionados: Item[];

  constructor(
    private itemService: ItemService,
  ) {

   }

  ngOnInit(): void {
    this.itens = this.itemService.getListaItens();
  }

  onSubmit(){
    let horaTrabalhada =  parseFloat(localStorage.getItem('horaTrabalhada'));
    if (!horaTrabalhada){
      horaTrabalhada = 10;
    }
    this.custo = this.horasTrabalhadas * horaTrabalhada;
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
