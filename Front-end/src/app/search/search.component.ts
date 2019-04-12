import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle} from '../../domain/vehicle.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  vehicles = [];
  filtered = [];
  vehiclesURL = 'http://127.0.0.1:5000/VehicleSearchEngine/Dealer/1/vehicles';
  headers = ['vbrand', 'vmodel', 'vyear', 'vprice'];
  constructor(private httpclient: HttpClient) { }

  ngOnInit() {
    this.httpclient.get<Vehicle[]>(this.vehiclesURL).subscribe(data => {
      this.vehicles = data;
      this.filtered = data;
    });
  }
  searchVehicle(brand: string, model: string, year: string) {

    if (brand === '' && model === '' && year === '') {
      this.vehicles = this.filtered;
    } else if (brand !== '' && model === '' && year === '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vbrand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()));
    } else if (brand === '' && model !== '' && year === '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vmodel.toLocaleLowerCase().includes(model.toLocaleLowerCase()));
    } else if (brand === '' && model === '' && year !== '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vyear.toLocaleLowerCase().includes(year.toLocaleLowerCase()));
    } else if (brand !== '' && model !== '' && year === '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vbrand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()) && vehicle.vmodel.toLocaleLowerCase().includes(model.toLocaleLowerCase()));
    } else if (brand !== '' && model === '' && year !== '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vbrand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()) && vehicle.vyear.toLocaleLowerCase().includes(year.toLocaleLowerCase()));
    } else if (brand === '' && model !== '' && year !== '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vmodel.toLocaleLowerCase().includes(model.toLocaleLowerCase()) && vehicle.vyear.toLocaleLowerCase().includes(year.toLocaleLowerCase()));
    } else if (brand !== '' && model !== '' && year !== '') {
      this.vehicles = this.filtered.filter(vehicle => vehicle.vbrand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()) && vehicle.vmodel.toLocaleLowerCase().includes(model.toLocaleLowerCase()) && vehicle.vyear.toLocaleLowerCase().includes(year.toLocaleLowerCase()));
    }
  }
}
