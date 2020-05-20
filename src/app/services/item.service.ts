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
    return this.http.get(environment.baseUrl + '/itens');
  }

  getItem(id) {
    const url = environment.baseUrl + '/itens/' + id;
    console.log(url);
    return this.http.get(url).toPromise();
  }

  getTiposUnidade(){
    return this.http.get('../assets/tipo-unidade.json');
  }

  postCreate(item){
    try{
      const url = environment.baseUrl + '/itens';
      console.log(url);
      const response = this.http.post(url, item);
      response.toPromise().then(r => console.log(r));
    }catch(err){
      console.log(err);
      alert('Ocorreu um erro ao cadastrar esse item.');
    }
  }
}
