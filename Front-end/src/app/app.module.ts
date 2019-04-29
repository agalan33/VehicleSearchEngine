import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';
import {AgmCoreModule} from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AllDealersComponent } from './all-dealers/all-dealers.component';
import { DealerDetailComponent } from './dealer-detail/dealer-detail.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DealerVehiclesComponent } from './dealer-vehicles/dealer-vehicles.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AllDealersComponent,
    DealerDetailComponent,
    LoginComponent,
    ProfileComponent,
    DealerVehiclesComponent,
    VehicleDetailComponent,
    AddVehicleComponent,
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
    FlexLayoutModule,
    AgmCoreModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule
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
       MatToolbarModule,
       MatDialogModule,
     MatSnackBarModule
   ],
  entryComponents: [
    AddVehicleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
