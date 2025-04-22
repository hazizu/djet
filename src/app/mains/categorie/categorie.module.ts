import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieComponent } from './categorie/categorie.component';
import { CategorieRoutingModule } from './categorie.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PromoComponent } from './promo/promo.component';
import { TendancesComponent } from './tendances/tendances.component';
import { MeilleurVenteComponent } from './meilleur-vente/meilleur-vente.component';
import { SearchBasedProductsComponent } from './search-based-products/search-based-products.component';
import { CategorieProduitComponent } from './categorie-produit/categorie-produit.component';



@NgModule({
  declarations: [
    CategorieComponent,
    PromoComponent,
    TendancesComponent,
    MeilleurVenteComponent,
    SearchBasedProductsComponent,
    CategorieProduitComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    SharedModule
  ]
})
export class CategorieModule { }
