import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlueBoxComponent } from './blue-box/blue-box.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: "Tarifrechner", component: BlueBoxComponent },
  { path: "Übersicht", component: UebersichtComponent },
  { path: "Erstellen", component: CreateComponent },
  { path: "", redirectTo: "/Tarifrechner", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
