import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  constructor(private ref: MatDialogRef<AddVehicleComponent>, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  closeDialog() {
    this.ref.close();
  }

  addNewVehicle(vbrand: string, vmodel: string, vyear: string, vcolor: string, vprice: string, vhp: number, ve: string, vcylinders: string, vmpg: string) {
    if (vbrand && vmodel && vyear && vcolor && vprice && vhp && ve && vcylinders && vmpg) {

    } else {
      this.snackBar.open('Missing inputs', '' , {
        duration: 1000
      });
    }
  }
}
