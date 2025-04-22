import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IChip } from 'src/app/shared/components/chip-btn/chip-btn.component';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit{
  chipIndex?:number 
  categorieName?:string | null
  chips: IChip[] = [
    {
      libelle:'Tendances',
      icon1:'./../../../../assets/SVG/tendance-icon-blue.svg',
      icon2:'./../../../../assets/SVG/tendance-icon-blue.svg',
      pathName:'tendance',
      isActive:false
    },
    {
      libelle:'Promo',
      icon1:'./../../../../assets/SVG/promo-icon.svg',
      icon2:'./../../../../assets/SVG/promo-icon.svg',
      pathName:'promo',
      isActive:false
    },
    {
      libelle:'Meilleurs ventes',
      icon1:'./../../../../assets/SVG/best-vente-icon.svg',
      icon2:'./../../../../assets/SVG/best-vente-icon.svg',
      pathName:'meilleure-vente',
      isActive:false
    }
  ];
  constructor(
    private route:ActivatedRoute,
    public router:Router
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categorieName = params.get('categorieName')
      console.log(this.categorieName);
    })
    
     
  }

  getChipsClicked(chip:IChip, index:number){
    console.log(chip);
    this.chipIndex = index
    this.router.navigate(['/home/categories/' + chip.pathName])
    
    

  }
  getLastWord(url: string): string {
    const segments = url.split('/');
    return segments.filter(Boolean).pop() || '';
  }
}
