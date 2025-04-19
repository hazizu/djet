import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './sevices/login.service';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup
  invalidError:boolean = false
  errorMessage:string = ''

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private loginService:LoginService,
    private store:StoreService
  ) {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(5)]]
    })


  }

  login(){
    this.invalidError = false
    this.errorMessage = ''
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.loginService.login(this.loginForm.value).then(
        (res)=>{
          console.log(res);
          localStorage.setItem('token', res.UserLogin.accessToken)
          this.store.userData = res.UserLogin.user
          this.router.navigate(['/home'])
        },
        (error:any)=>{
          console.log(error[0].message);
          this.errorMessage = error[0].message
          this.invalidError = true
        }
      )
    }else{
      this.invalidError = true
    }
   
  }

}
