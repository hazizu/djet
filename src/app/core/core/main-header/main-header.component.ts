import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { PanierService } from 'src/app/mains/gestion-produit/panier/panier.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit{
  showNavPhone:boolean = false;
  isShowToggle:boolean = false
user:IUser | null = null;

panier:ICategorieProduct[] = [];

  constructor(
    private router:Router,
    private store:StoreService,
    private panierservice:PanierService
  ){}

  ngOnInit(): void {
    this.store.userData$.subscribe(res=>{
      this.user = res;
    })

    this.panierservice.paniers$.subscribe(res=>{
      this.panier = res;
      // console.log('le panier',res);
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
  goToPanier(){
    this.router.navigate(['home/articles/user/panier'])

  }

}
