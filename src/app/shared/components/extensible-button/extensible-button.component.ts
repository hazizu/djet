import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICategorie, ISubCategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';


@Component({
  selector: 'app-extensible-button',
  templateUrl: './extensible-button.component.html',
  styleUrls: ['./extensible-button.component.scss']
})


export class ExtensibleButtonComponent  implements OnInit{
  isExpand:boolean = false
  isMobile = false;
@Input() extensibleData?:ICategorie
@Output() onclickNav:EventEmitter<boolean> = new EventEmitter<boolean>();


constructor(
  private router:Router
){}

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

goToProducts(subNav:ISubCategorie){
  this.router.navigate(['/home/articles', subNav.id])
  this.onclickNav.emit(true)
}
}
