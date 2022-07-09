import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Tarife {
  constructor(
  public ID: number,
  public Bezeichnung: string,
  public Fuer: string,
  public Img: string,
  public Hinweis: string,
  public Grundpreis: number,
  public Verbrauchspreis: number
  ) {}
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
      this.http.get<any>("http://localhost/tarifrechner/getTarife.php").subscribe( respone =>{
        this.Tarife = respone;
        this.Anzahl = this.Tarife.length;
      })
    }
}
