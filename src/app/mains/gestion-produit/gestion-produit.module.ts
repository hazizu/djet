import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchedArticlesComponent } from './searched-articles/searched-articles.component';
import { GestionProduitRoutingModule } from './gestionProduit.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { PanierComponent } from './panier/panier.component';
import { PanierResumeItemComponent } from './panier-resume-item/panier-resume-item.component';
import { ValideCommandeComponent } from './valide-commande/valide-commande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchedArticlesComponent,
    DetailArticleComponent,
    PanierComponent,
    PanierResumeItemComponent,
    ValideCommandeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GestionProduitRoutingModule,
    SharedModule
  ]
})
export class GestionProduitModule { }
