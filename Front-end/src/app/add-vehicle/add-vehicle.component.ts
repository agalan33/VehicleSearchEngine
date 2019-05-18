import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  constructor(private ref: MatDialogRef<AddVehicleComponent>, private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  closeDialog() {
    this.ref.close();
  }

  addNewVehicle(vbrand: string, vmodel: string, vyear: string, vcolor: string, vprice: string, vhp: number, ve: string, vcylinders: string, vmpg: string) {
    if (vbrand && vmodel && vyear && vcolor && vprice && vhp && ve && vcylinders && vmpg) {
      const url = 'http://127.0.0.1:5000/VehicleSearchEngine/Vehicles';
      this.httpClient.post(url, {
        'vbrand': vbrand,
        'vmodel': vmodel,
        'vyear': vyear,
        'vcolor': vcolor,
        'vprice': Number(vprice),
        'did': 1,
        'horse_power': Number(vhp),
        'edition': ve,
        'cylinders': Number(vcylinders),
        'miles_per_gallon': Number(vmpg)
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
}
