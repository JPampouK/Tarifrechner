import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class Tarife {
  constructor(
    public ID: number,
    public Bezeichnung: string,
    public Grundpreis: number,
    public Verbrauchspreis: number
  ) { }
}

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.scss']
})
export class UebersichtComponent implements OnInit {
  Tarife!: Tarife[];
  Anzahl: number;
  event = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getTarife();
  }

  // ID an Bearbeiten senden
  sendId(id: number){
    this.router.navigate(['/Bearbeiten', id]);
  }

  // Alle Trife holen
  getTarife() {
    this.http.get<any>("http://localhost/tarifrechner/getTarife.php").subscribe(respone => {
      this.Tarife = respone;
      this.Anzahl = this.Tarife.length;
    })
  }

  // Tarif löschen
  deleteTarif(id: number){
    this.http.delete("http://localhost/tarifrechner/deleteTarif.php?ID=" + id).subscribe();
    window.location.reload();
  }
}
