import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent} from './search/search.component';
import { HomeComponent} from './home/home.component';
import { AllDealersComponent} from './all-dealers/all-dealers.component';
import { DealerDetailComponent} from './dealer-detail/dealer-detail.component';
import { LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: '', component: HomeComponent},
  {path: 'all-dealers', component: AllDealersComponent},
  {path: 'dealer/:mid', component: DealerDetailComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
