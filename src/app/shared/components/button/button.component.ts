import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() styles = {}
  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Input() isDisabled:boolean = false

  constructor(){

  }

  connect(event:MouseEvent){
    this.clicked.emit(event);
  }
}
