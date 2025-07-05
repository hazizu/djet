import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';
import { UpdateProfileService } from './services/update-profile.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit{
  updateProfileForm:FormGroup
  showUpdateForm:boolean = false
  user:IUser | null = null
  invalidError:boolean = false
  isSuccess:boolean = false

  constructor(
    private fb:FormBuilder,
    private store:StoreService,
    private updateProfileService:UpdateProfileService
  ) {
    this.updateProfileForm = this.fb.group({})
  
   }

  ngOnInit(): void {
    this.store.userData$.subscribe((user)=>{
      console.log('user', user);
      this.user = user
      
      this.updateProfileForm = this.fb.group({
        lastName:[user? user.lastName:'', Validators.required],
        firstName:[user? user.firstName:'', Validators.required],
        phone:[user? user.phone:'', Validators.required],
        address:[user? user.address:'', Validators.required],
        email:[user? user.email:'', Validators.required],
      })

    })

  }
  showForm(){
    this.showUpdateForm = !this.showUpdateForm
  }

  updateProfile(){
    if(this.updateProfileForm.valid){
    this.store.loader = true
    console.log(this.updateProfileForm.value);
    let query = {
      firstName:this.updateProfileForm.value.firstName,
      lastName:this.updateProfileForm.value.lastName,
      phone:this.updateProfileForm.value.phone,
      address:this.updateProfileForm.value.address,
      email:this.updateProfileForm.value.email
    }
    this.updateProfileService.updateProfile(query).then(
      (res)=>{
        this.store.loader = false
        console.log('update profile ok',res);
        if(res.UpdateUserInfo.success){
          this.store.userData = res.UpdateUserInfo.user
          this.showUpdateForm = false
          this.isSuccess = true
          setTimeout(() => {
            this.isSuccess = false
          }, 3000);
        }
      },(err)=>{
        this.store.loader = false
        console.log('update profile error',err);
      }
     
    )
    }else{
      this.invalidError = true
    }

  }
}
