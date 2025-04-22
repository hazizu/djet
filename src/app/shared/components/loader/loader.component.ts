import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit{
  showLoad:boolean = false
  constructor(
    private store:StoreService
  ){
    
  }
  ngOnInit(): void {
    this.store.loader$.subscribe((load)=>{
      this.showLoad = load;
    })
  }

}
