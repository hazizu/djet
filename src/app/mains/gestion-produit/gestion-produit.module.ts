import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchedArticlesComponent } from './searched-articles/searched-articles.component';
import { GestionProduitRoutingModule } from './gestionProduit.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SearchedArticlesComponent
  ],
  imports: [
    CommonModule,
    GestionProduitRoutingModule,
    SharedModule
  ]
})
export class GestionProduitModule { }
