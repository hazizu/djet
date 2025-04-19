import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  seachValue:string=""
  closeSearchedList:boolean=true
  @Output() onChangeValue:EventEmitter<string> = new EventEmitter<string>
  @Output() onSearchedValue:EventEmitter<string> = new EventEmitter<string>
  @Input() preSearchList:string[]=[
    "Apple iPhone 14 Pro Max 256 GB", 
    "Apple iPhone 13 Pro",
    "Apple iPhone 13 mini ",
    "Apple iPhone 12",
    "Apple iPhone 11 Pro Max",
  ]

  getValue(){
    this.onChangeValue.emit(this.seachValue)
    console.log(this.seachValue);
    this.seachValue ? this.closeSearchedList = true : this.closeSearchedList = false
  }
  getValueWithButton(){
    this.onChangeValue.emit(this.seachValue)
    console.log(this.seachValue);
  }

  getSearchedValue(searchedValue:string){
    this.onSearchedValue.emit(searchedValue)
    console.log(searchedValue);
    this.closeSearchedList = false
  }

}
