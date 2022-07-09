import { Component, OnInit } from '@angular/core';
import { PreisBerechnenService } from '../preis-berechnen.service';

@Component({
  selector: 'app-blue-box',
  templateUrl: './blue-box.component.html',
  styleUrls: ['./blue-box.component.scss']
})
export class BlueBoxComponent implements OnInit {
  constructor(public _preisBerechen: PreisBerechnenService) { 
  }

  ngOnInit() {
  }

}
