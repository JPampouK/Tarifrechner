import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTarife();
  }

  getTarife() {
    this.http.get<any>("http://localhost/tarifrechner/getTarife.php").subscribe(respone => {
      this.Tarife = respone;
      this.Anzahl = this.Tarife.length;
    })
  }

  deleteTarif(id: number){
    this.http.delete("http://localhost/tarifrechner/deleteTarif.php?ID=" + id).subscribe();
    window.location.reload();
  }

}
