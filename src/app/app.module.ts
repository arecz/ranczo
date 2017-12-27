import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LandingComponent,
    LeftBarComponent,
    RightBarComponent,
    NavbarComponent,
    StartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
