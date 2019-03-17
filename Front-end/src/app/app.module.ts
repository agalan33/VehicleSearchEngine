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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
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
