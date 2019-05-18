import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../domain/employee.type';
import {Vehicle} from '../../domain/vehicle.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  private employeeURL = 'http://127.0.0.1:5000/VehicleSearchEngine/Employees/1';
  private vehiclesURL = 'http://127.0.0.1:5000/VehicleSearchEngine/vehicles';
  private employee: Employee;
  private allVehicles = [];
  private topVehicles: Vehicle[] = [];
  headers = ['position', 'vbrand', 'vmodel'];

  ngOnInit() {
    this.getEmployeeInformation();
    this.getTopVehicles();
  }
  getEmployeeInformation() {
    this.httpClient.get<Employee>(this.employeeURL).subscribe(data => {
      this.employee = data;
    });
  }

  getTopVehicles() {
    this.httpClient.get<Vehicle[]>(this.vehiclesURL).subscribe(data => {
      this.allVehicles = data;
      for (let i = 0; i < 10; i++) {
        this.topVehicles.push(this.allVehicles[Math.floor(Math.random() * this.allVehicles.length)]);
      }
    });
  }

}
