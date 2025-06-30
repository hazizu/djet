import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputComponent {
  @Input() placeholderText: string = '';
  @Input() inputType:string = "text"
  @Input() controlName:string='';
  @Input() libelle:string = '';
  @Input() styles = {}
  @Input() isPasswordInput:boolean = false;
  @Input() redBorder?:boolean = false;
  @Input() isStyle?:boolean = false;

  show:boolean = false;

  constructor() { }
  hidePass(){
    this.show = false;
    console.log('hide', this.show);
    !this.show ? this.inputType = "password": this.inputType = "text";  
  }

  showPass(){
    this.show = true 
    console.log('show',this.show);
    this.show? this.inputType = "text": this.inputType = "password";
  }

}
