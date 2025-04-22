import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-button-item',
  templateUrl: './news-button-item.component.html',
  styleUrls: ['./news-button-item.component.scss']
})
export class NewsButtonItemComponent {

  @Input() newData?: {
    image:string,
    title1:string,
    title2:string,
   pathName:string,
    }

    constructor(
      private router:Router
    ){
      
    }
    goToCategories(){
      this.router.navigate(['/home/categories/' +  this.newData?.pathName])

    }

}
