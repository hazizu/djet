import { Component, inject, NgModule } from "@angular/core";

import { Route, RouterModule, Routes } from "@angular/router";
import { CategorieComponent } from "./categorie/categorie.component";
import { TendancesComponent } from "./tendances/tendances.component";
import { PromoComponent } from "./promo/promo.component";
import { MeilleurVenteComponent } from "./meilleur-vente/meilleur-vente.component";
import { CategorieProduitComponent } from "./categorie-produit/categorie-produit.component";


const routes:Routes = [
    {
        path: '',  component:CategorieComponent,
        children: [
            {
                path:'tendance', component:TendancesComponent
            },
            {
                path:'promo', component:PromoComponent
            },
            {
                path:'meilleure-vente', component:MeilleurVenteComponent
            }
         
        ]
    },
    {
        path:'categorie-produit', component:CategorieProduitComponent
    },
    {
        path:'categorie-produit/:id', component:CategorieProduitComponent,
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})  
export class CategorieRoutingModule{
    
}