import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatMenuModule, MatIconModule,
  MatCardModule, MatSidenavModule, MatFormFieldModule,
  MatInputModule, MatTooltipModule, MatToolbarModule, MatTabsModule, MatTableModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AllDealersComponent } from './all-dealers/all-dealers.component';
import { DealerDetailComponent } from './dealer-detail/dealer-detail.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DealerVehiclesComponent } from './dealer-vehicles/dealer-vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SearchComponent,
    AllDealersComponent,
    DealerDetailComponent,
    LoginComponent,
    ProfileComponent,
    DealerVehiclesComponent,
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    FlexLayoutModule
  ],
   exports: [
       MatButtonModule,
       MatMenuModule,
       MatIconModule,
       MatCardModule,
       MatSidenavModule,
       MatFormFieldModule,
       MatInputModule,
       MatTooltipModule,
       MatToolbarModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
