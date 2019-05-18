import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {

  constructor(private ref: MatDialogRef<AddReservationComponent>, private snackBar: MatSnackBar, private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
  }
  closeDialog() {
    this.ref.close();
  }
  submit(rname: string) {
    if (rname) {
      const url = 'http://127.0.0.1:5000/VehicleSearchEngine/Dealers/';
      this.httpClient.post(url.concat(this.getDealerID()).concat('/reserved/').concat(this.getVehicleID()), {
        'eid': 1,
        'rname': rname
      }).subscribe( data => {
        if (data['Ok']) {
          window.location.reload();
        }
      });
    } else {
      this.snackBar.open('Missing inputs', '' , {
        duration: 1000
      });
    }
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
