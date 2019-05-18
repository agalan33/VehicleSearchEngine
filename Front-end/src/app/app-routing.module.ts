import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AllDealersComponent} from './all-dealers/all-dealers.component';
import { DealerDetailComponent} from './dealer-detail/dealer-detail.component';
import { LoginComponent} from './login/login.component';
import {VehicleDetailComponent} from './vehicle-detail/vehicle-detail.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'all-dealers', component: AllDealersComponent},
  {path: 'dealer/:mid', component: DealerDetailComponent},
  {path: 'dealer/:mid/vehicles/:mid', component: VehicleDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
