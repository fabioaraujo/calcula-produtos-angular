import { ProdutoService } from '../services/produto.service';
import { ItemService } from '../services/item.service';
import { Item } from '../classes/item';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControl } from '@angular/forms';

@Component({
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos;

  constructor(
    private produtoService: ProdutoService
  ) {

   }

  ngOnInit(): void {
    this.produtos = this.produtoService.getListaProdutos();
  }

}
