import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/_utils/util.service';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.scss']
})
export class LocalisationComponent implements OnInit{

  constructor(private router:Router, private utils:UtilService){}

  ngOnInit(): void {
    this.utils.getLocation()
    
  }

goToHome(){
  this.router.navigate(['/home'])
  console.log(this.router.url);
  
}
itinary(){
  this.utils.route()

}
}
