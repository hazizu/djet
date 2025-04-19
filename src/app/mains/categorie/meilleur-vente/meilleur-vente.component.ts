import { Component } from '@angular/core';
import { Article } from '../../gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-meilleur-vente',
  templateUrl: './meilleur-vente.component.html',
  styleUrls: ['./meilleur-vente.component.scss']
})
export class MeilleurVenteComponent {
  productData:Article[] = [
    {
      image: './../../../../assets/SVG/product1.svg',
      name: 'Iphone 14 Pro',
      price: 120000,
      description:"",
      id:"1"
    },
    {
      image: './../../../../assets/SVG/product2.svg',
      name: 'Iphone 14 Pro',
      price: 120000,  
      description:"",
      id:"1"
    },
    {
      image: './../../../../assets/SVG/product3.svg',
      name: 'Iphone 14 Pro',
      price: 120000,
      description:"",
      id:"1"
    },
    {
      image: './../../../../assets/SVG/product4.svg',
      name: 'Iphone 14 Pro',
      price: 120000,
      description:"",
      id:"1"
    },
    {
      image: './../../../../assets/SVG/product1.svg',
      name: 'Iphone 14 Pro',
      price: 120000,
      description:"",
      id:"1"
    },
    {
      image: './../../../../assets/SVG/product2.svg',
      name: 'Iphone 14 Pro',
      price: 120000,  
      description:"",
      id:"1"
    },
    {
      image: './../../../../assets/SVG/product3.svg',
      name: 'Iphone 14 Pro',
      price: 120000,
      description:"",
      id:"1"
    },
    {
      image: './../../../../assets/SVG/product4.svg',
      name: 'Iphone 14 Pro',
      price: 120000,
      description:"",
      id:"1"
    }
  ]
}
