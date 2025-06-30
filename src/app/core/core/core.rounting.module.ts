import { Component, inject, NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from "@angular/router";
import { ShopHomeComponent } from "./shop-home/shop-home.component";
import { UserSpaceComponent } from "./user-space/user-space.component";
import { AuthGuardService } from "../services/auth-guard.service";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { MyCommandeDetailComponent } from "./my-commande-detail/my-commande-detail.component";
import { LocalisationMapComponent } from "src/app/shared/components/localisation-map/localisation-map.component";
const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path: '', component: ShopHomeComponent
            },
            {
                path: 'espace-personnel', component: UserSpaceComponent

            },
            {
                path: 'commandes', component: MyOrdersComponent,
                canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => (inject(AuthGuardService).canActivateReturnUrl(route, state))]
            },
            {
                path: 'commandes/:id', component: MyCommandeDetailComponent,
            },
            {
                path: 'articles', loadChildren: () => import('./../../mains/gestion-produit/gestion-produit.module').then(m => m.GestionProduitModule),

            },
            {
                path: 'categories', loadChildren: () => import('./../../mains/categorie/categorie.module').then(m => m.CategorieModule),
            },
          
            {
                path: '**',
                redirectTo: 'home'
            }
            // Lazy loading des différents modules
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes,)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }