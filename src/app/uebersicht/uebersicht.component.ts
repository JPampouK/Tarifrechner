import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GetTarifeService } from '../get-tarife.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.scss']
})
export class UebersichtComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient, private router: Router, public _getTarife: GetTarifeService) { }

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
