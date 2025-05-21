import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  returnUrl:string = ''

  constructor(
    private router: Router,
  ) { }


  canActivateReturnUrl(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree{
    console.log('URL demandée :', state.url)
    const isAuthenticated = localStorage.getItem('token') !== null;
    if (!this.isAuthenticated()) {
      this.returnUrl = state.url
      return this.router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: state.url } });
    }else{
      return true;
    }
  }

  isAuthenticated(){
    const token:any = localStorage.getItem('token')
    if(!token){
      return false
    } else{
      return true
    }
    
  }
}
