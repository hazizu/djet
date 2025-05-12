import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-visualisation',
  templateUrl: './images-visualisation.component.html',
  styleUrls: ['./images-visualisation.component.scss']
})
export class ImagesVisualisationComponent implements OnInit{
  @Input() listImages?: {image:string}[];
  imageSelected?: string ;
  selectedIndex: number = 0;

  constructor() { 
    
  }

  ngOnInit(): void {
    if(this.listImages?.length){
      this.imageSelected = this.listImages[0].image;    
    }
  }

  select(seletedImage:string, index:number){
    console.log(seletedImage);
    this.selectedIndex = index;
    const imageFind = this.listImages?.find(img => img.image === seletedImage);
    if(imageFind){
      this.imageSelected = imageFind.image;
    }
  }
}
