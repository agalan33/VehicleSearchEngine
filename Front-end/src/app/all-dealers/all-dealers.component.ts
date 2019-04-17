import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Dealer} from '../../domain/dealer.type';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dealers',
  templateUrl: './all-dealers.component.html',
  styleUrls: ['./all-dealers.component.scss']
})
export class AllDealersComponent implements OnInit {
  dealers = [];
  filtered = [];
  dealersURL = 'http://127.0.0.1:5000/VehicleSearchEngine/Dealers';
  headers = ['dname', 'dcity'];
  pURL = '/dealer/';
  constructor(private httpclient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.httpclient.get<Dealer[]>(this.dealersURL).subscribe(data => {
      this.dealers = data;
      this.filtered = data;
    });
  }

  searchDealer(name: string) {
    if (name === '') {
      this.dealers = this.filtered;
    } else {
      this.dealers = this.filtered.filter(dealer => dealer.dname.toLowerCase().includes(name.toLowerCase()));
    }
  }
  goToDealer(dealer: number) {
    const dUrl = this.pURL.concat(String(dealer));
    this.router.navigateByUrl(dUrl);
  }

}
