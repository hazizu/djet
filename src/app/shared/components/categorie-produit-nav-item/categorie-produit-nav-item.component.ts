import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export interface CategorieProduitNavItem {
  navName: string;
  pathName: string;
  image: string;
  
}

@Component({
  selector: 'app-categorie-produit-nav-item',
  templateUrl: './categorie-produit-nav-item.component.html',
  styleUrls: ['./categorie-produit-nav-item.component.scss']
})
export class CategorieProduitNavItemComponent {
  constructor(
    private router:Router
  ){

  }
  @Input() categorieProduitNav?:CategorieProduitNavItem

  getProduitCategorie(){
    this.router.navigate(['/home/categories/categorie-produit', this.categorieProduitNav?.pathName])

  }
}
