import { Attivita } from './model/attivita';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttivitaService {
  private elencoAttivita: Attivita[] = [];
  private elencoAttivita$ = new BehaviorSubject<Attivita[]>([]);

  constructor() {
    // carica l'elenco delle attività
    // TODO: questo elenco è fittizio, solo per test!!
    this.elencoAttivita = [
      {
        dataOraInizio: new Date(2021, 6, 8, 8, 29, 0),
        dataOraFine: new Date(2021, 6, 8, 12, 31, 0),
        descrizione: 'Apprendimento concetti base Angular',
        referente: 'Michele BONACINA',
      },
      {
        dataOraInizio: new Date(2021, 6, 8, 14, 2, 0),
        dataOraFine: new Date(2021, 6, 8, 18, 10, 0),
        descrizione: 'Applicazione di esempio',
        referente: 'Michele BONACINA',
      },
      {
        dataOraInizio: new Date(2021, 6, 9, 8, 32, 0),
        dataOraFine: new Date(2021, 6, 9, 12, 29, 0),
        descrizione: 'Approfondimento concetti base Angular',
        referente: 'Michele BONACINA',
      },
    ];
    // aggiunge l'elenco al subject
    this.elencoAttivita$.next([...this.elencoAttivita]);
  }

  public elencaAttivita(): Subject<Attivita[]> {
    return this.elencoAttivita$;
  }

  public nuovaAttivita(attivita: Attivita) {
    this.elencoAttivita.push({ ...attivita });
    this.elencoAttivita$.next([...this.elencoAttivita]);
  }
}
