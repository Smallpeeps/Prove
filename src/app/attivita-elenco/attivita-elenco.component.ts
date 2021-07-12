import { AttivitaService } from './../attivita.service';
import { Attivita } from './../model/attivita';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attivita-elenco',
  templateUrl: './attivita-elenco.component.html',
  styleUrls: ['./attivita-elenco.component.scss'],
})
export class AttivitaElencoComponent implements OnInit {
  elencoAttivita: Attivita[] = [];

  constructor(private attivitaService: AttivitaService) {}

  ngOnInit(): void {
    this.elencoAttivita = this.attivitaService.elencaAttivita();
  }
}
