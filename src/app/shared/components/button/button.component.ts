import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() styles = {}
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(){

  }

  connect(){
    this.clicked.emit();
  }
}
