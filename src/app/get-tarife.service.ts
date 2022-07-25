import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Tarife {
  ID: number;
  Bezeichnung: string;
  Fuer: string;
  Img: string;
  Hinweis: string;
  Grundpreis: number;
  Verbrauchspreis: number;
}

@Injectable({
  providedIn: 'root'
})
export class GetTarifeService {
  Tarife!: Tarife[];
  Anzahl: number;

  constructor(private http: HttpClient) { }

    // Alle Tarife holen
    getTarife(){
      this.http.get<undefined>("http://localhost/tarifrechner/getTarife.php").subscribe( data =>{
        this.Tarife = data; // Antwort in Array speichern
        this.Anzahl = this.Tarife.length; // Anzahl von Tarifen setzten
      })
    }
}
