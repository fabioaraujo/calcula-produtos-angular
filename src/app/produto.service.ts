import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  getListaProdutos(){
    return this.http.get('../assets/produtos.json');
  }

  async getProduto(id) {
    const produtos = await this.getListaProdutos().toPromise();
    console.log(produtos);

    let produto;

    for (const i in produtos) {
      if (produtos.hasOwnProperty(i)) {
        const element = produtos[i];
        if (element.id === id){
          produto = element;
          break;
        }
      }
    }
    console.log(produto);

    return produto;
  }
}
