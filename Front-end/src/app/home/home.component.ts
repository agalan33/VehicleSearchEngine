import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../domain/employee.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  private employeeURL = 'http://127.0.0.1:5000/VehicleSearchEngine/Employees/1';
  private employee: Employee;
  ngOnInit() {
    this.getEmployeeInformation();
  }
  getEmployeeInformation() {
    this.httpClient.get<Employee>(this.employeeURL).subscribe(data => {
      this.employee = data;
    });
  }

}
