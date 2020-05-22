import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HoraTrabalhadaService {

  constructor(
    private http: HttpClient
  ) { }

  get() {
    const url = environment.baseUrl + '/hora-trabalhada';
    console.log(url);
    return this.http.get(url).toPromise();
  }

  atualiza(horaTrabalhada){
    try{
      console.log(environment.baseUrl + '/hora-trabalhada');
      this.http.put(environment.baseUrl + '/hora-trabalhada', horaTrabalhada).toPromise();
    }catch(err){
      console.log(err);
      alert('Ocorreu um erro ao atualizar o custo da hora trabalhada.');
    }
  }
}
