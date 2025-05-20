import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key-value-item',
  templateUrl: './key-value-item.component.html',
  styleUrls: ['./key-value-item.component.scss']
})
export class KeyValueItemComponent {
@Input() key:string=""
@Input() value:string | undefined=""
@Input() styles?:{}
}
