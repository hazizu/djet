import { Component, inject, NgModule } from "@angular/core";

import { ActivatedRouteSnapshot, Route, RouterModule, RouterStateSnapshot, Routes } from "@angular/router";
import { SearchedArticlesComponent } from "./searched-articles/searched-articles.component";
import { DetailArticleComponent } from "./detail-article/detail-article.component";
import { PanierComponent } from "./panier/panier.component";
import { ValideCommandeComponent } from "./valide-commande/valide-commande.component";
import { AuthGuardService } from "src/app/core/services/auth-guard.service";

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
        canActivate:[(route:ActivatedRouteSnapshot, state:RouterStateSnapshot)=>(inject(AuthGuardService).canActivateReturnUrl(route, state))]

    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})  
export class GestionProduitRoutingModule{
    
}