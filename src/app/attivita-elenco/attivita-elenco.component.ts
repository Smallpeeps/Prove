import { AttivitaService } from './../attivita.service';
import { Attivita } from './../model/attivita';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-attivita-elenco',
  templateUrl: './attivita-elenco.component.html',
  styleUrls: ['./attivita-elenco.component.scss'],
})
export class AttivitaElencoComponent implements OnInit, OnDestroy {
  elencoAttivita: Attivita[] = [];
  elencoAttivitaSubs: Subscription;

  constructor(private attivitaService: AttivitaService) {}

  ngOnInit(): void {
    this.elencoAttivitaSubs = this.attivitaService
      .elencaAttivita()
      .subscribe((elencoAttivita) => {
        this.elencoAttivita = elencoAttivita;
      });
  }

  ngOnDestroy(): void {
    this.elencoAttivitaSubs.unsubscribe();
  }
}
