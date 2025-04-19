import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss']
})
export class ShopHomeComponent implements OnInit{
showNavPhone:boolean = false;
user:IUser | null = null;
constructor(
  private router:Router,
  private store:StoreService,
){}

ngOnInit(): void {
  this.store.userData$.subscribe(res=>{
    this.user = res
    console.log('user',res);
    
  })
  
}

  getSearchValue(value:string){
    console.log(value);
  }
  getPreSearch(value:string){
    console.log(value);
    this.router.navigate(['/home/articles']);

  }
  showPhoneNave(){
    this.showNavPhone = true
    console.log("show");
  }
  
  closeNav(value:boolean){
    this.showNavPhone = false
  }

}
