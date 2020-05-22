import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  getListaProdutos(){
    return this.http.get(environment.baseUrl + '/produtos');
  }

  async getProduto(id) {
    const url = environment.baseUrl + '/produtos/' + id;
    console.log(url);
    return this.http.get(url).toPromise();
  }

  create(produto){
    try{
      const url = environment.baseUrl + '/produtos';
      console.log(url);
      let response;
      if (!produto.id){
        response = this.http.post(url, produto);
      }else{
        response = this.http.put(url, produto);
      }
      response.toPromise().then(r => console.log(r));
    }catch(err){
      console.log(err);
      alert('Ocorreu um erro ao cadastrar esse produto.');
    }
  }
}
