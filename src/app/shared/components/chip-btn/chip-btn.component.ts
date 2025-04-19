import { Component, EventEmitter, Input, Output } from '@angular/core';
export interface IChip {
  libelle:string,
  icon1:string,
  icon2:string,
  pathName:string,
  isActive:boolean
}

@Component({
  selector: 'app-chip-btn',
  templateUrl: './chip-btn.component.html',
  styleUrls: ['./chip-btn.component.scss']
})
export class ChipBtnComponent {
  @Input() chipsData?:IChip
  @Input() isActive?:boolean = false;
  @Output() isClicked: EventEmitter<any> = new EventEmitter<any>();


  clickedBtn(){
    this.isClicked.emit(this.chipsData);

  }

}
