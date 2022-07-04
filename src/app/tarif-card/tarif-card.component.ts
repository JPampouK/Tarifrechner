import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Component({
  selector: 'app-tarif-card',
  templateUrl: './tarif-card.component.html',
  styleUrls: ['./tarif-card.component.scss']
})
export class TarifCardComponent implements OnInit {
  Tarife!: Tarife[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTarife();
  }

  getTarife(){
    this.http.get<any>("http://localhost/tarifrechner/getTarife.php").subscribe( respone =>{
      this.Tarife = respone;
    })
  }

}
