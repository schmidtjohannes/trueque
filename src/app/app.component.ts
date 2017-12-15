import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';
import { Producer } from './producer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Define a users property to hold our user data
  users: Array<any>;
  currentMarkerIndex = -1;
  isEditable: boolean = false;
  isAddModeEnabled = false;
  
  producers = [
    new Producer('Johannes', 51.678418, 7.809007),
    new Producer('Martin', 51.957065, 7.622915)
  ];
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {

    // Access the Data Service's getUsers() method we defined
    this._dataService.getUsers()
        .subscribe(res => this.users = res);
  }

  switchEditMode() {
    if (this.isEditable) {
      this.isEditable = false;
    } else {
      this.isEditable = true;
    }
  }

  enableAddMode() {
    if (this.isAddModeEnabled) {
      this.isAddModeEnabled = false;
    } else {
      this.isAddModeEnabled = true;
    }
  }

  deleteItem() {
    if (this.currentMarkerIndex > -1) {
      this.producers.splice(this.currentMarkerIndex,1);
    }
  }

  setCurrentMarkerIndex(idx:number) {
    console.log('current marker index: ' + idx);
    this.currentMarkerIndex = idx;
  }

  mapClicked($event: MouseEvent) {
    console.log($event);
    if (!this.isAddModeEnabled) {
      return;
    }
    this.producers.push(
      new Producer('Nuevo Registro', $event.coords.lat, $event.coords.lng)
    );
    this.isAddModeEnabled = false;
  }
}
