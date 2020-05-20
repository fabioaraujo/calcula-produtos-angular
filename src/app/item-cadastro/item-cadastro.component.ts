import { ItemService } from '../services/item.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {
  itemPadrao = {
            id: '',
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

    this.tiposUnidade = this.itemService.getTiposUnidade();
  }

  onSubmit(){
    this.itemService.postCreate(this.item);
  }

}
