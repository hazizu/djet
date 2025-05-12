import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit{
  showNavPhone:boolean = false;
  isShowToggle:boolean = false
user:IUser | null = null;
  constructor(
    private router:Router,
    private store:StoreService,
  ){}

  ngOnInit(): void {
    this.store.userData$.subscribe(res=>{
      this.user = res;
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
  showToggle(){
    console.log("show", this.isShowToggle);
    
    this.isShowToggle = !this.isShowToggle;
  }
  close(){
    this.isShowToggle = false;
  }

}
