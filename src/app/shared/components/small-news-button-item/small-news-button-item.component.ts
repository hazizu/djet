import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-news-button-item',
  templateUrl: './small-news-button-item.component.html',
  styleUrls: ['./small-news-button-item.component.scss']
})
export class SmallNewsButtonItemComponent {

  constructor(
    private router:Router
  ) { }
  @Input() smallNewData?: {
    image:string,
    title1:string,
    title2:string,
    pathName:string
    }

    goToCategorie(){
      this.router.navigate(['/home/categories/categorie-produit', this.smallNewData?.pathName])

    }
}
