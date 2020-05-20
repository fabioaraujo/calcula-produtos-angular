import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient
  ) { }

  getListaItens(){
    return this.http.get('../assets/itens.json');
  }

  async getItem(id) {
    const itens = await this.getListaItens().toPromise();
    console.log(itens);

    let item;

    for (const i in itens) {
      if (itens.hasOwnProperty(i)) {
        const element = itens[i];
        if (element.id === id){
          item = element;
          break;
        }
      }
    }
    console.log(item);

    return item;
  }
}
