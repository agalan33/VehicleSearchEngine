import { Component, OnInit } from '@angular/core';
import {Employee} from '../../domain/employee.type';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  employee: Employee;
  private employeeURL = 'http://127.0.0.1:5000/VehicleSearchEngine/Employees/1';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getEmployeeInformation();
  }

  getEmployeeInformation() {
    this.httpClient.get<Employee>(this.employeeURL).subscribe(data => {
      this.employee = data;
    });
  }

}
