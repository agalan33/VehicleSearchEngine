import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Vehicle} from '../../domain/vehicle.type';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle;

  constructor(private router: Router, private htpClient: HttpClient) { }

  ngOnInit() {
    this.getVehicleInformation(this.getVehicleID());
  }
  getVehicleInformation(id: string) {
    const vehicleURL = 'http://127.0.0.1:5000/VehicleSearchEngine/Vehicles/';
    this.htpClient.get<Vehicle>(vehicleURL.concat(id)).subscribe(data => {
      this.vehicle = data;
    });
  }
  getVehicleID() {
    const thisURL = this.router.url;
    let i = 2;
    let id = thisURL.charAt(thisURL.length - 1);
    console.log(id);
    while (this.isNumber(id)) {
      id = thisURL.charAt(thisURL.length - i).concat(id);
      i++;
    }
    id = id.slice(1);
    return id;
  }
  isNumber(id: string) {
    if (String(Number(id)) === 'NaN') {
      return false;
    }
    return true;
  }

}
