import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttivitaElencoComponent } from './attivita-elenco/attivita-elenco.component';
import { AttivitaNuovaComponent } from './attivita-nuova/attivita-nuova.component';

@NgModule({
  declarations: [AppComponent, AttivitaElencoComponent, AttivitaNuovaComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
