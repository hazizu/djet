import { Component } from '@angular/core';
import { Article } from '../../gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-search-based-products',
  templateUrl: './search-based-products.component.html',
  styleUrls: ['./search-based-products.component.scss']
})
export class SearchBasedProductsComponent {
  totalCount:number = 500;
  productData:Article[] = [
    {
      image: './../../../../assets/SVG/product1.svg',
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
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
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
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
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, noire',
      price: 120000,
      description:"",
      id:"1"
    },
    {
      image: './../../../../assets/SVG/product2.svg',
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gold',
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

  onChangePage(offset:number){
    console.log(offset);
  }
}
