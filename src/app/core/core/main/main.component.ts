import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/mains/auth/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  showNavPhone :boolean = false
  constructor(
    private authServiceService:AuthService,
  ){}
  ngOnInit(): void {
    this.authServiceService.getUserData()
    this.authServiceService.getcategories()
  }
  closeNav(value:boolean){
    this.showNavPhone = false
  }
}
