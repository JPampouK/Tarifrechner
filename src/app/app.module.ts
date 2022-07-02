import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueBoxComponent } from './blue-box/blue-box.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TarifCardComponent } from './tarif-card/tarif-card.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';


@NgModule({
  declarations: [
    AppComponent,
    BlueBoxComponent,
    HeaderComponent,
    FooterComponent,
    TarifCardComponent,
    UebersichtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
