import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient
  ) { }

  getListaItens(){
    return this.http.get(environment.baseUrl + '/item/listar');
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

  getTiposUnidade(){
    return this.http.get('../assets/tipo-unidade.json');
  }

  postCreate(item){
    try{
      const url = environment.baseUrl + '/item/criar';
      console.log(url);
      const response = this.http.post(url, item);
      response.toPromise().then(r => console.log(r));
    }catch(err){
      console.log(err);
      alert('Ocorreu um erro ao cadastrar esse item.');
    }
  }
}
