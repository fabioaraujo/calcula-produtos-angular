import { Component, OnInit } from '@angular/core';

import { ItemService } from '../services/item.service';

@Component({
  templateUrl: './listar-itens.component.html',
  styleUrls: ['./listar-itens.component.css']
})
export class ListarItensComponent implements OnInit {
  itens;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.itens = this.itemService.getListaItens();
  }

}
