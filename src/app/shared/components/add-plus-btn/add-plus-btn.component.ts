import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-plus-btn',
  templateUrl: './add-plus-btn.component.html',
  styleUrls: ['./add-plus-btn.component.scss']
})
export class AddPlusBtnComponent {
  addedNumber:number = 1;
  @Output() addedNumberChange:EventEmitter<number> = new EventEmitter<number>();

  moin(){
    if(this.addedNumber > 1){
      this.addedNumber--;
      this.addedNumberChange.emit(this.addedNumber);
    }
  }

  plus(){
    this.addedNumber++;
    this.addedNumberChange.emit(this.addedNumber);
  }
}
