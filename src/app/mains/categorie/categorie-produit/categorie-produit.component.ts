import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieProduitNavItem } from 'src/app/shared/components/categorie-produit-nav-item/categorie-produit-nav-item.component';
import { Article } from '../../gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.component.html',
  styleUrls: ['./categorie-produit.component.scss']
})
export class CategorieProduitComponent implements OnInit{
  produitTitle: string = 'Smartphones';
  totalCount:number = 500
  produitNavs: CategorieProduitNavItem[] = [
    {
      navName: 'Smartphones & tablettes',
      pathName: 'smartphones',
      image: './../../../../assets/SVG/categorie-produit-smartphone.svg',
    },
    {
      navName: 'PC & MAC',
      pathName: 'pc-mac',
      image: './../../../../assets/SVG/categorie-produit-tablette.svg',
    },
    {
      navName: 'Gaming',
      pathName: 'gaming',
      image: './../../../../assets/SVG/categorie-produit-telephone-portable.svg',
    },
    {
      navName: 'Stockage',
      pathName: 'stockage',
      image: './../../../../assets/SVG/categorie-produit-telephone-fixed.svg',
    },
    {
      navName: 'Audio & vidéo',
      pathName: 'audio-video',
      image: './../../../../assets/SVG/categorie-produit-accessoires.svg',
    }
  ]

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
    },
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
  ]
  constructor(private route:ActivatedRoute) {

   }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pathName =  params.get('produitName')
      this.produitNavs.forEach((produit)=>{
        if(produit.pathName === pathName){
          this.produitTitle = produit.navName
        }
      })
      console.log(this.produitTitle);
    })
    
  }
  onChangePage(page:number){
    console.log(page);

  }

}
