import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  newLesterForm:FormGroup
  constructor(private fb:FormBuilder) {
    this.newLesterForm = this.fb.group({
      'email':["", [Validators.required, Validators.email]]
    })
  
   }

}
