import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Vehicle} from '../../domain/vehicle.type';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reservation } from '../../domain/reservation.type';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddReservationComponent} from '../add-reservation/add-reservation.component';
import {AddSellComponent} from '../add-sell/add-sell.component';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle;
  reservation: Reservation;
  isCancelable = false;
  constructor(private router: Router, private htpClient: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.getVehicleInformation(this.getVehicleID());
    this.getVehicleReservation(this.getVehicleID(), this.getDealerID());

  }
  getVehicleInformation(id: string) {
    const vehicleURL = 'http://127.0.0.1:5000/VehicleSearchEngine/Vehicles/';
    this.htpClient.get<Vehicle>(vehicleURL.concat(id)).subscribe(data => {
      this.vehicle = data;
    });
  }
  getVehicleReservation(vid: string, did: string) {
    const url = 'http://127.0.0.1:5000/VehicleSearchEngine/Dealers/';
    this.htpClient.get<Reservation>(url.concat(did).concat('/reserved/').concat(vid)).subscribe( data => {
      if (data['vid']) {
        this.reservation = data;
        if (data['eid'] === 1) {
          this.isCancelable = true;
        }
      }
    });
  }
  removeReservationFromVehicle() {
    const url = 'http://127.0.0.1:5000/VehicleSearchEngine/Dealers/';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {'vid': 1}
    };
    this.htpClient.delete(url.concat(this.getDealerID()).concat('/reserved/').concat(this.getVehicleID()), httpOptions).subscribe( data => {
      if (data['Ok']) {
        window.location.reload();
      }
    });
  }
  openReservationDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '500px';
    this.dialog.open(AddReservationComponent, dialogConfig);
  }
  openSellDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '500px';
    this.dialog.open(AddSellComponent, dialogConfig);
  }
  getVehicleID() {
    const thisURL = this.router.url;
    let i = 2;
    let id = thisURL.charAt(thisURL.length - 1);
    while (this.isNumber(id)) {
      id = thisURL.charAt(thisURL.length - i).concat(id);
      i++;
    }
    id = id.slice(1);
    return id;
  }
  getDealerID() {
    const thisURL = this.router.url;
    const id = thisURL.charAt(8);
    return id;
  }
  isNumber(id: string) {
    if (String(Number(id)) === 'NaN') {
      return false;
    }
    return true;
  }

}
