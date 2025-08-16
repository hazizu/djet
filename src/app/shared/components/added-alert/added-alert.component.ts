import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-added-alert',
  templateUrl: './added-alert.component.html',
  styleUrls: ['./added-alert.component.scss']
})
export class AddedAlertComponent implements OnInit {
  showAlert:boolean = false
  showMessage:string = ''

  constructor(
    private store:StoreService
  ) { }

  ngOnInit(): void {

    this.store.addedMessage$.subscribe((showMessage)=>{
      this.showMessage = showMessage
    })
    this.store.showAddedAlert$.subscribe((showAlert)=>{
      this.showAlert = showAlert
    })

  }

}
