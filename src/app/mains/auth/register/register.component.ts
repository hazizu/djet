import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterService } from './services/user-register.service';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm:FormGroup
  invalidError:boolean = false
  errorMessage :string = ''
  constructor(
    private fb:FormBuilder, 
    private router:Router,
    private userRegisterService:UserRegisterService,
    private store:StoreService,
  ){

    this.registerForm = this.fb.group({
      'nom':["", Validators.required],
      'telephone':["", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      'email':["", [Validators.required, Validators.email]],
      'adresse':["", Validators.required],
      'password':["", [Validators.required, Validators.minLength(5)]],
      'confirmPassword':["", [Validators.required, Validators.minLength(5)]]
    })

  }
register(){
  this.invalidError = false
  this.errorMessage = ''
  if(this.registerForm.valid){
    this.store.loader = true
    console.log(this.registerForm.value);
    let query = {
      phone:this.registerForm.value.telephone,
      username:this.registerForm.value.nom,
      email:this.registerForm.value.email,
      address:this.registerForm.value.adresse,
      password1:this.registerForm.value.password,
      password2:this.registerForm.value.confirmPassword
    }
    this.userRegisterService.postUser(query).then(
      (res)=>{
        this.store.loader = false
        console.log(res);
        if(res.UserRegister.success){
          this.router.navigate(['/inscription-reussie'])
        }else if(res.UserRegister.errors.length){
          this.invalidError = true
          this.errorMessage = res.UserRegister.message
        }
       
      },
      (err:any)=>{
        this.store.loader = false
        console.log(err);

      }
    )
    
  }else{
    this.invalidError = true
  }
}



}
