import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Tarife {
  constructor(
  public ID: number,
  public Bezeichnung: string,
  public Grundpreis: number,
  public Verbrauchspreis: number
  ) {}
}

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.scss']
})
export class UebersichtComponent implements OnInit {
  Tarife!: Tarife[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTarife();
  }
  
  getTarife(){
    this.http.get<any>("http://localhost/tarifrechner/tarife.php").subscribe( respone =>{
      this.Tarife = respone;
    })
  }


}
