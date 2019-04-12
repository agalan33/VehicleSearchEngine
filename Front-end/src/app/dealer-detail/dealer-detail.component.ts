import { Component, OnInit } from '@angular/core';
import { Dealer} from '../../domain/dealer.type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  constructor(private  httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    // this.dURL = this.router.url.toString();
    // this.dealerNumber = this.dURL.charAt(this.dURL.length - 1);
    // this.dealerURL = this.dealerURL.concat(this.dealerNumber);
    // this.cURL = this.dbURL;
    // this.httpClient.get<Playlist>(this.cURL).subscribe(data => this.selectedPlaylist = data);
    // this.dbURL = this.dbURL.concat("/songs");
    // this.httpClient.get<Song[]>(this.dbURL).subscribe(data => this.songs = data);
  }

}
