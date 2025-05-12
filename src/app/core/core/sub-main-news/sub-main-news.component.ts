import { Component, OnInit } from '@angular/core';
import { IMainNews } from '../main-news/main-news.component';
import { StoreService } from '../../services/store.service';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';

@Component({
  selector: 'app-sub-main-news',
  templateUrl: './sub-main-news.component.html',
  styleUrls: ['./sub-main-news.component.scss']
})
export class SubMainNewsComponent implements OnInit{ 
  mainNews: ICategorie[] | null = []
  constructor(
    private store:StoreService
  ){

  }
  ngOnInit(): void {
    this.store.categiesData$.subscribe((data)=>{
      console.log('les categories sont',data);
      this.mainNews = data
    })
    
  }

}
