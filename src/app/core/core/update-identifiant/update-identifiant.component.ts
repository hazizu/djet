import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateProfileService } from '../update-profile/services/update-profile.service';
import { StoreService } from '../../services/store.service';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';

@Component({
  selector: 'app-update-identifiant',
  templateUrl: './update-identifiant.component.html',
  styleUrls: ['./update-identifiant.component.scss']
})
export class UpdateIdentifiantComponent implements OnInit {
  isShowForm:boolean = false
  updateIdForm:FormGroup
  invalidError:boolean = false
  errorMessage:string = ''
  isSuccess:boolean = false
  user:IUser | null = null
  
  constructor(
    private fb:FormBuilder,
    private updateProfileService:UpdateProfileService,
    private store:StoreService,
  ) { 
    this.updateIdForm = this.fb.group({
      'oldPass':['', Validators.required],
      'newPass':['', Validators.required],
      'conNewPass':['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.store.userData$.subscribe((user)=>{
      console.log('user', user);
      this.user = user

    })
  }
  showForm(){
    this.isShowForm = !this.isShowForm

  }
  updateId(){
    this.invalidError = false
    this.errorMessage = ''
    this.isSuccess = false
    if(this.updateIdForm.valid){
      if(this.updateIdForm.value.newPass === this.updateIdForm.value.conNewPass){
        const query = {
          oldPassword:this.updateIdForm.value.oldPass,
          newPassword1:this.updateIdForm.value.newPass,
          newPassword2:this.updateIdForm.value.conNewPass
        }
        this.store.loader = true
        this.updateProfileService.changePassword(query).then(
          (res)=>{
            this.store.loader = false
            console.log('change password', res);
            if(res.ChangePassword.success){
              this.isShowForm = false
              this.isSuccess = true
              this.updateIdForm.reset()
              setTimeout(() => {
                this.isSuccess = false
              }, 3000);
            }else{
              this.errorMessage = res.ChangePassword.message
              this.invalidError = true
              this.store.loader = false
            }
          },(err)=>{
            this.store.loader = false
            console.log('change password error', err);
          }
        )

      }else{
        this.errorMessage = "Les mots de passe ne correspondent pas"
        this.invalidError = true
      }

    }else{
      this.invalidError = true
    }

  }
}
