import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  Tarif!: Tarife;
  id: number;
  constructor(private http: HttpClient, private aRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTarif();
  }

  // Ausgewählten Tarif holen
  getTarif(){
    this.aRouter.params.subscribe(params => {
      this.id = params['id'];
    });
    this.http.get<Tarife>("http://localhost/tarifrechner/getTarif.php?ID=" + this.id).subscribe(response => {
      this.Tarif = response;
    });
  }

  // Update durchführen
  updateTarif(form: NgForm){
    let body = JSON.stringify(form.value);
    this.http.post("http://localhost/tarifrechner/editTarif.php?ID=" + this.id, body).subscribe();
    this.router.navigate(['/Übersicht'])
  }

}
