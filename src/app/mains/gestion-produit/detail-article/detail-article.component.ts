import { Component } from '@angular/core';
import { IGarantie } from 'src/app/shared/components/garantie-item/garantie-item.component';
import { Article } from '../searched-articles/searched-articles.component';
import { CategorieProduitNavItem } from 'src/app/shared/components/categorie-produit-nav-item/categorie-produit-nav-item.component';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent {
  articleData:Article={
  id:'1',
  price:495000,
  oldPrice:520000,
  name:"Apple iPhone 13 Pro 6Go/128Go - Graphite",
  image:"",
  description:"",
  note:4.98
  }

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
  
  garantiesData:IGarantie[]=[
    {
      icon:"./../../../../assets/SVG/livraison-garantie-icon.svg",
      title:"Livraison dans les temps",
      description:"Commandez et recevez votre article dans les 24h avec des frais de livraisons défiants toute concurrence."
    },
    {
      icon:"./../../../../assets/SVG/garantie-icon.svg",
      title:"Articles garanties",
      description:"Nous avons une confiance absolue sur l’origine et la qualité de nos articles, Ils sont donc garantis 1 an."
    },
    {
      icon:"./../../../../assets/SVG/garantie-return-icon.svg",
      title:"Retour d'articles",
      description:"Après réception de vos articles, vous avez 10 jours pour faire un retour. Notre SAV est disponible pour vous."

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
    }
  ]

  articleImages:string[]=[
    "./../../../../assets/SVG/product1.svg",
    "./../../../../assets/SVG/product2.svg",
    "./../../../../assets/SVG/product2.svg",
    "./../../../../assets/SVG/product4.svg",
    "./../../../../assets/SVG/product2.svg",
    "./../../../../assets/SVG/product1.svg",
    "./../../../../assets/SVG/product4.svg",
    "./../../../../assets/SVG/product1.svg",
    "./../../../../assets/SVG/product4.svg",
  ]

  
}
