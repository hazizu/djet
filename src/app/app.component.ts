import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'djetFront';

  constructor(
    private http:HttpClient
  ) {
    
  }

  ngOnInit(): void {
    this.http.get('./../../assets/config/environment.json').subscribe((res:any)=>{
      if(res && res.mode === 'dev'){
         console.warn(`🚨 Console output is disabled on production!`);
          console.log = function (): void { };
          console.debug = function (): void { };
          console.warn = function (): void { };
          console.info = function (): void { };
      }
    })
    
  }
}
