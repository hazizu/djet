import { Component } from '@angular/core';
import { Article } from '../../gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-tendances',
  templateUrl: './tendances.component.html',
  styleUrls: ['./tendances.component.scss']
})
export class TendancesComponent {
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
