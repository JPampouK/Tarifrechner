import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export class Tarife {
  constructor(
    public ID: number,
    public Bezeichnung: string,
    public Fuer: string,
    public Img: string,
    public Hinweis: string,
    public Grundpreis: number,
    public Verbrauchspreis: number
  ) { }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  id: number;

  ngOnInit() {
  }

  // Aktuelle ID holen
  getId($event){
    this.id = $event
  }

  // Tarif Erstellen 
  setTarif(form: NgForm) {
    JSON.stringify(form.value);
    this.http.post("http://localhost/tarifrechner/setTarif.php", form.value).subscribe();
    this.router.navigate(['/Übersicht']);
  }
}

