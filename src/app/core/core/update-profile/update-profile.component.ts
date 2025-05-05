import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit{
  updateProfileForm:FormGroup
  showUpdateForm:boolean = false

  constructor(
    private fb:FormBuilder,
    private store:StoreService
  ) {
    this.updateProfileForm = this.fb.group({})
  
   }

  ngOnInit(): void {
    this.store.userData$.subscribe((user)=>{
      console.log('user', user);
      
      this.updateProfileForm = this.fb.group({
        nom:[user? user.lastName:'', Validators.required],
        prenom:[user? user.firstName:'', Validators.required],
        phone:[user? user.phone:'', Validators.required],
      })

    })

  }
  showForm(){
    this.showUpdateForm = !this.showUpdateForm
  }
}
