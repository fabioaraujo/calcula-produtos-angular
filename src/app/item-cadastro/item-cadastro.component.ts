import { ItemService } from '../services/item.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {
  itemPadrao = {
            nome: '',
            custo: '',
            tipoUnidade: ''
          };
  item;
  tiposUnidade;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.tiposUnidade = this.itemService.getTiposUnidade();

    this.route.paramMap.subscribe( params => {
      this.itemService.getItem(+params.get('id'))
            .then(item => {
                if (item){
                  this.item = item;
                }else{
                  this.item = this.itemPadrao;
                }
            });
    });
  }

  onSubmit(){
    this.itemService.postCreate(this.item);
  }

}
