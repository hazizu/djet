import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  showNavPhone :boolean = false
  closeNav(value:boolean){
    this.showNavPhone = false
  }
}
