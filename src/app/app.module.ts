import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttivitaElencoComponent } from './attivita-elenco/attivita-elenco.component';

@NgModule({
  declarations: [
    AppComponent,
    AttivitaElencoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
