import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueBoxComponent } from './blue-box/blue-box.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TarifCardComponent } from './tarif-card/tarif-card.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { GetTarifeService } from './get-tarife.service';
import { PreisBerechnenService } from './preis-berechnen.service';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BlueBoxComponent,
    HeaderComponent,
    FooterComponent,
    TarifCardComponent,
    UebersichtComponent,
    CreateComponent,
    EditComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [GetTarifeService, PreisBerechnenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
