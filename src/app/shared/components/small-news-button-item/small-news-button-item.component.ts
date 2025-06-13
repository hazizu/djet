import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';

@Component({
  selector: 'app-small-news-button-item',
  templateUrl: './small-news-button-item.component.html',
  styleUrls: ['./small-news-button-item.component.scss']
})
export class SmallNewsButtonItemComponent {

  constructor(
    private router:Router
  ) { }
  @Input() smallNewData?:ICategorie

    goToCategorie(){
      this.router.navigate(['/home/categories/categorie-produit', this.smallNewData?.id])
    }

    
}
