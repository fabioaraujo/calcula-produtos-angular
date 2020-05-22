import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from '../classes/item';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {
  itens;
  produto;
  produtoPadrao = {
    nome: '',
    horasTrabalhadas: '',
    itens: [],
    custo: ''
  };

  constructor(
    private itemService: ItemService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.itens = this.itemService.getListaItens();
    this.route.paramMap.subscribe( params => {
      this.produtoService.getProduto(+params.get('id'))
            .then(p => {
                if (p){
                  this.produto = p;
                }else{
                  this.produto = this.produtoPadrao;
                }
            });
    });
  }

  onSubmit(){
    console.log(this.produto);
    this.produtoService.create(this.produto);
  }

  calculaCusto(){
    let horaTrabalhada =  parseFloat(localStorage.getItem('horaTrabalhada'));
    if (!horaTrabalhada){
      horaTrabalhada = 10;
    }

    this.produto.custo = this.produto.horasTrabalhadas * horaTrabalhada;
    for (const i in this.produto.itens){
      if (this.produto.itens.hasOwnProperty(i)) {
        const item = this.produto.itens[i];
        if (item.quantidade > 0){
          this.produto.custo = this.produto.custo + item.custo * item.quantidade;
        }
      }
    }
  }

  selecionaItem(item){
    console.log(item);
    if (!this.produto.itens){
      this.produto.itens = [];
    }
    for (const i in this.produto.itens){
      if (this.produto.itens.hasOwnProperty(i)) {
        const itemSelecionado = this.produto.itens[i];
        if (item.id === itemSelecionado.id){
          return;
        }
      }
    }
    this.produto.itens.push(item);

    console.log(this.produto.itens);
  }

  removeItem(item){
    const idx = this.produto.itens.indexOf(item);
    if (idx !== -1){
      item.quantidade = '';
      this.produto.itens.splice(idx, 1);
    }
    console.log(this.produto.itens);
  }

}
