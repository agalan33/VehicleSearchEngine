import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchVehicle(brand: string, model: string, year: int, specification: string){
    console.log(brand);
    console.log(model);
    console.log(year);
    console.log(specification);
  }
}
