import { Component, inject, NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { RouterModule, Routes } from "@angular/router";
import { ShopHomeComponent } from "./shop-home/shop-home.component";
import { UserSpaceComponent } from "./user-space/user-space.component";
const routes:Routes = [
    {
        path: '',  component:MainComponent,
        children: [
            {
                path:'', component:ShopHomeComponent
            },
            {
                path:'espace-personnel', component:UserSpaceComponent

            },
            {
                path: 'articles', loadChildren: () => import('./../../mains/gestion-produit/gestion-produit.module').then(m => m.GestionProduitModule),
               
            },
            {
                path: 'categories', loadChildren: () => import('./../../mains/categorie/categorie.module').then(m => m.CategorieModule),
            }
            // Lazy loading des différents modules


        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes, )],
    exports: [RouterModule]
})  
export class CoreRoutingModule {}