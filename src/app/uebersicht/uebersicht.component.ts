import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GetTarifeService } from '../get-tarife.service';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.scss']
})
export class UebersichtComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, public _getTarife: GetTarifeService) { }

  ngOnInit() {
    // Alle Tarife holen
    this._getTarife.getTarife();
  }

  // ID an Bearbeiten senden
  sendId(id: number){
    this.router.navigate(['/Bearbeiten', id]);
  }

  // Tarif löschen
  deleteTarif(id: number){
    this.http.delete("http://localhost/tarifrechner/deleteTarif.php?ID=" + id).subscribe();
    window.location.reload();
  }
}
