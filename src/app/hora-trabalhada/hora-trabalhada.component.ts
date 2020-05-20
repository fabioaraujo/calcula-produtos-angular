import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora-trabalhada',
  templateUrl: './hora-trabalhada.component.html',
  styleUrls: ['./hora-trabalhada.component.css']
})
export class HoraTrabalhadaComponent implements OnInit {
  public horaTrabalhada = parseFloat(localStorage.getItem('horaTrabalhada'));

  constructor() { }

  ngOnInit(): void {
  }

  atualizarHoraTrabalhada(horaTrabalhada){
    console.log(horaTrabalhada);
    localStorage.setItem('horaTrabalhada', horaTrabalhada);
  }

}
