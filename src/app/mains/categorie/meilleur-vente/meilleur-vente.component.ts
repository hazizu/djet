import { Component } from '@angular/core';
import { Article } from '../../gestion-produit/searched-articles/searched-articles.component';
import { ICategorieProduct } from '../queries/get-categorie-products.service';

@Component({
  selector: 'app-meilleur-vente',
  templateUrl: './meilleur-vente.component.html',
  styleUrls: ['./meilleur-vente.component.scss']
})
export class MeilleurVenteComponent {
  productData:ICategorieProduct[] = []
}
