import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent} from './search/search.component';
import { HomeComponent} from './home/home.component';
import { DealersComponent} from './dealers/dealers.component';
import { DealerDetailComponent} from './dealer-detail/dealer-detail.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: '', component: HomeComponent},
  {path: 'dealers', component: DealersComponent},
  { path: 'dealer/:mid', component: DealerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
