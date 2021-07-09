import { Attivita } from './../model/attivita';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attivita-elenco',
  templateUrl: './attivita-elenco.component.html',
  styleUrls: ['./attivita-elenco.component.scss'],
})
export class AttivitaElencoComponent implements OnInit {
  elencoAttivita: Attivita[] = [];

  constructor() {}

  ngOnInit(): void {
    // carica l'elenco delle attività
    // TODO: questo elenco è fittizio, solo per test!!
    this.elencoAttivita = [
      {
        dataOraInizio: new Date(2021, 6, 8, 8, 29, 0),
        dataOraFine: new Date(2021, 6, 8, 12, 31, 0),
        descrizione: 'Apprendimento concetti base Angular',
      },
      {
        dataOraInizio: new Date(2021, 6, 8, 14, 2, 0),
        dataOraFine: new Date(2021, 6, 8, 18, 10, 0),
        descrizione: 'Applicazione di esempio',
      },
      {
        dataOraInizio: new Date(2021, 6, 9, 8, 32, 0),
        dataOraFine: new Date(2021, 6, 9, 12, 29, 0),
        descrizione: 'Approfondimento concetti base Angular',
      },
    ];
  }
}
