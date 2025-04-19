import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-news-button-item',
  templateUrl: './small-news-button-item.component.html',
  styleUrls: ['./small-news-button-item.component.scss']
})
export class SmallNewsButtonItemComponent {
  @Input() smallNewData?: {
    image:string,
    title1:string,
    title2:string,
    }

}
