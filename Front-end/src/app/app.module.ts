import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatMenuModule, MatIconModule,
    MatCardModule, MatSidenavModule, MatFormFieldModule,
    MatInputModule, MatTooltipModule, MatToolbarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DealersComponent } from './dealers/dealers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SearchComponent,
    DealersComponent
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
       BrowserAnimationsModule
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
