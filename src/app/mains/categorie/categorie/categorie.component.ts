import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGetPromoNav } from 'src/app/core/core/main-news/queries/get-promo-categorie-gql.service';
import { StoreService } from 'src/app/core/services/store.service';
import { IChip } from 'src/app/shared/components/chip-btn/chip-btn.component';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit{
  chipIndex?:number 
  categorieName?:string | null
  promos:IGetPromoNav[] | null = []
  chips: IChip[] = [
    {
      name:'Tendances',
      icon1:'./../../../../assets/SVG/tendance-icon-blue.svg',
      icon2:'./../../../../assets/SVG/tendance-icon-blue.svg',
      pathName:'tendance',
      isActive:false
    },
    {
      name:'Promo',
      icon1:'./../../../../assets/SVG/promo-icon.svg',
      icon2:'./../../../../assets/SVG/promo-icon.svg',
      pathName:'promo',
      isActive:false
    },
    {
      name:'Meilleurs ventes',
      icon1:'./../../../../assets/SVG/best-vente-icon.svg',
      icon2:'./../../../../assets/SVG/best-vente-icon.svg',
      pathName:'meilleure-vente',
      isActive:false
    }
  ];
  constructor(
    private route:ActivatedRoute,
    public router:Router,
    private store:StoreService
  ){}
  ngOnInit(): void {
     this.store.promoNavData$.subscribe((data)=>{
     this.promos = data
     this.promos?.map((item)=>{
      item.name = item.category
     })
     console.log('promos', this.promos);
    })
      
  }

  getChipsClicked(chip:IGetPromoNav, index:number){
    console.log(chip);
    this.chipIndex = index
    this.router.navigate(['/home/categories/' , this.slugify(chip?.category) ,chip?.id])
    
  }


  slugify(text:any) {
  return text
    .toLowerCase()            // transforme en minuscules
    .trim()                   // supprime les espaces en début/fin
    .replace(/\s+/g, '-')     // remplace tous les espaces (même multiples) par des tirets
    .replace(/[^\w\-]+/g, '') // supprime les caractères spéciaux sauf les tirets
    .replace(/\-\-+/g, '-');  // remplace les doubles tirets par un seul
}


  deslugify(slug: string): string {
  const text = slug
    .replace(/-/g, ' ')       // remplace les tirets par des espaces
    .replace(/\s+/g, ' ')     // nettoie les espaces multiples
    .trim()                   // supprime les espaces autour
    .toLowerCase();           // tout en minuscules

  return text.charAt(0).toUpperCase() + text.slice(1);
}




  getLastWord(url: string): string {
    const segments = url.split('/');
    return segments.filter(Boolean).pop() || '';
  }

  getLastWord2(url: string): string {
  const segments = url.split('/').filter(Boolean);
  return segments.length >= 2 ? segments[segments.length - 2] : '';
}
}


