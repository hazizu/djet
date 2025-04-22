import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(public router:Router){
  }

  goToLogin(){
    this.router.navigate(['/auth/login'])
  }
  goToInscription(){
    this.router.navigate(['/auth/inscription'])
  }

}
