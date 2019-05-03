import { Component, OnInit } from '@angular/core';
import { Dealer} from '../../domain/dealer.type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Vehicle} from '../../domain/vehicle.type';
import { Sort } from '@angular/material';
import { MatTabChangeEvent } from '@angular/material';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-dealer-detail',
  templateUrl: './dealer-detail.component.html',
  styleUrls: ['./dealer-detail.component.scss']
})
export class DealerDetailComponent implements OnInit {
  dealer: Dealer;
  dealerNumber = '';
  dealerURL = 'http://127.0.0.1:5000/VehicleSearchEngine/Dealers/';
  dURL = '';
  vehicles = [];
  filtered = [];
  vehiclesURL = '';
  reservedURL = '';
  headers = ['vbrand', 'vmodel', 'vyear', 'vcolor', 'vprice'];

  constructor(private  httpClient: HttpClient, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.getDealerInformation();
  }
  onLinkClick(event: MatTabChangeEvent) {
    if (event.index === 0) {
      this.getAllCars();
    } else {
      this.getReservedCars();
    }
  }
  getDealerInformation() {
    this.dURL = this.router.url.toString();
    this.dealerNumber = this.dURL.charAt(this.dURL.length - 1);
    this.dealerURL = this.dealerURL.concat(this.dealerNumber);
    this.httpClient.get<Dealer>(this.dealerURL).subscribe(data => {
      this.dealer = data;
      this.vehiclesURL = this.dealerURL.concat('/vehicles');
      this.reservedURL = this.dealerURL.concat('/reserved');
      this.getAllCars();
    });
  }
  getAllCars() {
    this.httpClient.get<Vehicle[]>(this.vehiclesURL).subscribe(data => {
      this.vehicles = data;
      this.filtered = data;
    });
  }


  getReservedCars() {
    this.httpClient.get<Vehicle[]>(this.reservedURL).subscribe(data => {
      this.vehicles = data;
      this.filtered = data;
    });
  }

  sortData(sort: Sort) {
    const sorted = this.vehicles.slice();
    this.vehicles = sorted.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'brand': return this.compare(a.vbrand, b.vbrand, isAsc);
        case 'model': return this.compare(a.vmodel, b.vmodel, isAsc);
        case 'year': return this.compare(a.vyear, b.vyear, isAsc);
        case 'color': return this.compare(a.vcolor, b.vcolor, isAsc);
        case 'price': return this.compare(a.vprice, b.vprice, isAsc);
        default: return 0;
      }
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '500px';
    this.dialog.open(AddVehicleComponent, dialogConfig);
  }

  searchVehicle(brand: string, model: string, year: string, color: string) {

    if (brand === '' && model === '' && year === '' && color === '') {
      this.vehicles = this.filtered;
    } else if (brand !== '' && model === '' && year === '' && color === '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vbrand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()));
    } else if (brand === '' && model !== '' && year === '' && color === '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vmodel.toLocaleLowerCase().includes(model.toLocaleLowerCase()));
    } else if (brand === '' && model === '' && year !== '' && color === '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vyear.toLocaleLowerCase().includes(year.toLocaleLowerCase()));
    } else if (brand === '' && model === '' && year === '' && color !== '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vcolor.toLocaleLowerCase().includes(color.toLocaleLowerCase()));
    } else if (brand !== '' && model !== '' && year === '' && color === '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vbrand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()) && vehicle.vmodel.toLocaleLowerCase().includes(model.toLocaleLowerCase()));
    } else if (brand !== '' && model === '' && year !== '' && color === '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vbrand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()) && vehicle.vyear.toLocaleLowerCase().includes(year.toLocaleLowerCase()));
    } else if (brand !== '' && model === '' && year === '' && color !== '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vbrand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()) && vehicle.vcolor.toLocaleLowerCase().includes(color.toLocaleLowerCase()));
    } else if (brand === '' && model !== '' && year !== '' && color === '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vmodel.toLocaleLowerCase().includes(model.toLocaleLowerCase()) && vehicle.vyear.toLocaleLowerCase().includes(year.toLocaleLowerCase()));
    } else if (brand === '' && model !== '' && year === '' && color !== '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vmodel.toLocaleLowerCase().includes(model.toLocaleLowerCase()) && vehicle.vcolor.toLocaleLowerCase().includes(color.toLocaleLowerCase()));
    } else if (brand === '' && model === '' && year !== '' && color !== '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.year.toLocaleLowerCase().includes(year.toLocaleLowerCase()) && vehicle.vcolor.toLocaleLowerCase().includes(color.toLocaleLowerCase()));
    } else if (brand !== '' && model !== '' && year !== '' && color !== '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vbrand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()) && vehicle.vmodel.toLocaleLowerCase().includes(model.toLocaleLowerCase()) && vehicle.vyear.toLocaleLowerCase().includes(year.toLocaleLowerCase()) && vehicle.vcolor.toLocaleLowerCase().includes(color.toLocaleLowerCase()));
    }
  }

  goToVehicleDetail(vid: number) {
    const thisURL = this.router.url.concat('/vehicles/');
    const vehicleDetailURL = thisURL.concat(String(vid));
    console.log(vid);
    this.router.navigateByUrl(vehicleDetailURL);
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
