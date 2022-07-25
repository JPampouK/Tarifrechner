import { Injectable } from '@angular/core';
import { GetTarifeService } from './get-tarife.service';

@Injectable({
  providedIn: 'root'
})
export class PreisBerechnenService {
  ergebnisJahr: number;
  ergebnisMonat: number;
  Tarife = [];

  constructor(public _getTarife: GetTarifeService) { }

  preisBerechnen(inputkWh: number) {
    // Array leeren
    this.Tarife = [];

    for (let tarif of this._getTarife.Tarife) {
      // Tarif berechnen / Jahr
      let verbrauchspreis = inputkWh * tarif.Verbrauchspreis / 100;
      let grundpreis = tarif.Grundpreis * 12;
      this.ergebnisJahr = verbrauchspreis + grundpreis;
      
      // Monat
      this.ergebnisMonat = this.ergebnisJahr / 12;

      // Auf zwei nachkommastellen Runden
      this.ergebnisJahr = Math.round(this.ergebnisJahr * 100) / 100;
      this.ergebnisMonat = Math.round(this.ergebnisMonat * 100) / 100;

      // Objekt/Tarif erstellen
      let fertigTarif = {
        ID: tarif.ID,
        Bezeichnung: tarif.Bezeichnung,
        Fuer: tarif.Fuer,
        Img: tarif.Img,
        Hinweis: tarif.Hinweis,
        ProJahr: this.ergebnisJahr,
        ProMonat: this.ergebnisMonat
      }
      // Objekt zu Array hinzufügen
      this.Tarife.push(fertigTarif);
    }
  }
}
