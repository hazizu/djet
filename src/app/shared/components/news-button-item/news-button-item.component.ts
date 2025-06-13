import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IGetPromoNav } from 'src/app/core/core/main-news/queries/get-promo-categorie-gql.service';

@Component({
  selector: 'app-news-button-item',
  templateUrl: './news-button-item.component.html',
  styleUrls: ['./news-button-item.component.scss']
})
export class NewsButtonItemComponent {

  @Input() newData?: IGetPromoNav


    constructor(
      private router:Router
    ){
      
    }
    goToCategories(){
      this.router.navigate(['/home/categories/categorie-produit' , this.slugify(this.newData?.category) ,this.newData?.id])
    }

  slugify(text:any) {
  return text
    .toLowerCase()            // transforme en minuscules
    .trim()                   // supprime les espaces en début/fin
    .replace(/\s+/g, '-')     // remplace tous les espaces (même multiples) par des tirets
    .replace(/[^\w\-]+/g, '') // supprime les caractères spéciaux sauf les tirets
    .replace(/\-\-+/g, '-');  // remplace les doubles tirets par un seul
}

}
