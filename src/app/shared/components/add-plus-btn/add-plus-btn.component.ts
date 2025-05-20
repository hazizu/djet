import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-plus-btn',
  templateUrl: './add-plus-btn.component.html',
  styleUrls: ['./add-plus-btn.component.scss']
})
export class AddPlusBtnComponent {
  @Input()addedNumber:number = 1;
  @Output() addedNumberChange:EventEmitter<number> = new EventEmitter<number>();

  moin(event:MouseEvent){
    event.stopPropagation();
    if(this.addedNumber > 1){
      this.addedNumber--;
      this.addedNumberChange.emit(this.addedNumber);
    }
  }

  plus(event:MouseEvent){
    event.stopPropagation();
    this.addedNumber++;
    this.addedNumberChange.emit(this.addedNumber);
  }
}
