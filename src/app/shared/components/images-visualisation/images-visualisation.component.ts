import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-visualisation',
  templateUrl: './images-visualisation.component.html',
  styleUrls: ['./images-visualisation.component.scss']
})
export class ImagesVisualisationComponent implements OnInit{
  @Input() listImages: string[] = [];
  imageSelected: string = '';
  selectedIndex: number = 0;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.imageSelected = this.listImages[0];
  }

  select(seletedImage:string, index:number){
    console.log(seletedImage);
    this.selectedIndex = index;
    const imageFind = this.listImages.find(img => img === seletedImage);
    if(imageFind){
      this.imageSelected = imageFind;
    }
  }
}
