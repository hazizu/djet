import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-extensible-button',
  templateUrl: './extensible-button.component.html',
  styleUrls: ['./extensible-button.component.scss']
})


export class ExtensibleButtonComponent  implements OnInit{
  isExpand:boolean = false
  isMobile = false;
@Input() extensibleData?:{
  libelle:string,
  navList:string[] ,
  icon:string,
}


constructor(){}

ngOnInit(): void {
  this.checkScreenSize();
  window.addEventListener('resize', () => this.checkScreenSize());
}
checkScreenSize() {
  this.isMobile = window.innerWidth <= 768;
}
expand(){
  this.isExpand = !this.isExpand

  console.log(this.isExpand);
  

}
}
