import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { ForgetPassService } from './services/forget-pass.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent {
  forgetPassForm:FormGroup
  errorMessage:string = ''
  successMessage:string = ''
  invalidError:boolean = false

  constructor(fb:FormBuilder, private router:Router, private store:StoreService, private forgetService:ForgetPassService){
    this.forgetPassForm = fb.group({
      email:['', [Validators.required, Validators.email]]
    })
  }

  goToLogin(){
    this.router.navigate(['/auth/login'])
  }

  envoyer(){
    this.invalidError = false
    this.errorMessage = ''
    this.successMessage = ''
    if(this.forgetPassForm.valid){
      this.store.loader = true
      console.log(this.forgetPassForm.value);
      this.forgetService.sendUserEmail(this.forgetPassForm.value).then(
        (res)=>{
          if(res.ForgotPassword.success){
            this.store.loader = false
            console.log(res);
            this.successMessage = res.ForgotPassword.message

            setTimeout(() => {
              this.router.navigate(['/auth/login'])
            }, 3000);
          }else if(res.ForgotPassword.errors.length){
          this.store.loader = false
          console.log(res.ForgotPassword.message);
          this.errorMessage = res.ForgotPassword.message
          this.invalidError = true

          }
        },(error)=>{
          this.store.loader = false
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
