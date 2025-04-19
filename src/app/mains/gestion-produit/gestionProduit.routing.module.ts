import { Component, inject, NgModule } from "@angular/core";

import { Route, RouterModule, Routes } from "@angular/router";
import { SearchedArticlesComponent } from "./searched-articles/searched-articles.component";

const routes:Routes = [
    {
        path: '',  component:SearchedArticlesComponent,
        children: [
         
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})  
export class GestionProduitRoutingModule{
    
}