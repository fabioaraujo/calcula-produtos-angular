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
    id: '',
    nome: '',
    horasTrabalhadas: '',
    itensSelecionados: [],
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
    let horaTrabalhada =  parseFloat(localStorage.getItem('horaTrabalhada'));
    if (!horaTrabalhada){
      horaTrabalhada = 10;
    }
    this.produto.custo = this.produto.horasTrabalhadas * horaTrabalhada;
    for (const i in this.produto.itensSelecionados){
      if (this.produto.itensSelecionados.hasOwnProperty(i)) {
        const item = this.produto.itensSelecionados[i];
        this.produto.custo = this.produto.custo + item.custo * item.quantidade;
      }
    }

    console.log(this.produto);
  }

  selecionaItem(item){
    console.log(item);
    if (!this.produto.itensSelecionados){
      this.produto.itensSelecionados = [];
    }
    for (const i in this.produto.itensSelecionados){
      if (this.produto.itensSelecionados.hasOwnProperty(i)) {
        const itemSelecionado = this.produto.itensSelecionados[i];
        if (item.id === itemSelecionado.id){
          return;
        }
      }
    }
    this.produto.itensSelecionados.push(item);

    console.log(this.produto.itensSelecionados);
  }

  removeItem(item){
    const idx = this.produto.itensSelecionados.indexOf(item);
    if (idx !== -1){
      item.quantidade = '';
      this.produto.itensSelecionados.splice(idx, 1);
    }
    console.log(this.produto.itensSelecionados);
  }

}
