import { Component, inject, NgModule } from "@angular/core";

import { Route, RouterModule, Routes } from "@angular/router";
import { SearchedArticlesComponent } from "./searched-articles/searched-articles.component";
import { DetailArticleComponent } from "./detail-article/detail-article.component";
import { PanierComponent } from "./panier/panier.component";
import { ValideCommandeComponent } from "./valide-commande/valide-commande.component";

const routes:Routes = [
    {
        path: '',  component:SearchedArticlesComponent,

    },
    {
        path: ':id',  component:SearchedArticlesComponent,
    },
    {
        path:'detail/:id', component:DetailArticleComponent
    },
    {
        path:'user/panier',component:PanierComponent,
    },
    {
        path:'user/valide-commande',component:ValideCommandeComponent,
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})  
export class GestionProduitRoutingModule{
    
}