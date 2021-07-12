import { AttivitaService } from './../attivita.service';
import { Attivita } from './../model/attivita';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attivita-nuova',
  templateUrl: './attivita-nuova.component.html',
  styleUrls: ['./attivita-nuova.component.scss'],
})
export class AttivitaNuovaComponent implements OnInit {
  nuovaAttivita: Attivita = {
    dataOraInizio: new Date(),
    dataOraFine: new Date(),
    descrizione: '',
    referente: '',
  };

  constructor(private attivitaService: AttivitaService) {}

  ngOnInit(): void {}

  aggiungiAttivita() {
    this.nuovaAttivita.dataOraInizio = new Date(
      this.nuovaAttivita.dataOraInizio
    );
    this.nuovaAttivita.dataOraFine = new Date(this.nuovaAttivita.dataOraFine);
    this.attivitaService.nuovaAttivita(this.nuovaAttivita);
  }
}
