import { HoraTrabalhadaService } from './../services/hora-trabalhada.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora-trabalhada',
  templateUrl: './hora-trabalhada.component.html',
  styleUrls: ['./hora-trabalhada.component.css']
})
export class HoraTrabalhadaComponent implements OnInit {
  horaTrabalhada;

  constructor(
    private horaTrabalhadaService: HoraTrabalhadaService
  ) { }

  ngOnInit(): void {
    this.horaTrabalhadaService.get().then(h => this.horaTrabalhada = h);
  }

  atualizarHoraTrabalhada(horaTrabalhada){
    console.log(horaTrabalhada);
    this.horaTrabalhadaService.atualiza(horaTrabalhada);
  }

}
