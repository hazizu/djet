import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export interface IChip {
  name:string,
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
export class ChipBtnComponent implements OnInit {
  @Input() chipsData?:any
  @Input() isActive?:boolean = false;
  @Output() isClicked: EventEmitter<any> = new EventEmitter<any>();


    ngOnInit(): void {
      console.log(this.chipsData);
      
    }

  clickedBtn(){
    this.isClicked.emit(this.chipsData);

  }

}
