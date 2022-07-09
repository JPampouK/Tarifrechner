import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetTarifeService } from '../get-tarife.service';
import { PreisBerechnenService } from '../preis-berechnen.service';

@Component({
  selector: 'app-tarif-card',
  templateUrl: './tarif-card.component.html',
  styleUrls: ['./tarif-card.component.scss']
})
export class TarifCardComponent implements OnInit {
  constructor(private http: HttpClient, public _getTarife: GetTarifeService, public _preisBerechnen: PreisBerechnenService) { }

  ngOnInit() {
    this._getTarife.getTarife();
    this._preisBerechnen.preisBerechnen(0);
  }

}
