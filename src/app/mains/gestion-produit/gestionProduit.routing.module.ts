import { Component, inject, NgModule } from "@angular/core";

import { Route, RouterModule, Routes } from "@angular/router";
import { SearchedArticlesComponent } from "./searched-articles/searched-articles.component";
import { DetailArticleComponent } from "./detail-article/detail-article.component";

const routes:Routes = [
    {
        path: '',  component:SearchedArticlesComponent,

    },
    {
        path: ':id',  component:SearchedArticlesComponent,
    },
    {
        path:'detail/:id', component:DetailArticleComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})  
export class GestionProduitRoutingModule{
    
}