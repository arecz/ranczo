import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './content/contact/contact.component';
import { LandingComponent } from './core/landing/landing.component';
import { LeftBarComponent } from './core/left-bar/left-bar.component';
import { RightBarComponent } from './core/right-bar/right-bar.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { StartComponent } from './core/start/start.component';
import { BlogComponent } from './content/blog/blog.component';
import { OfferComponent } from './content/offer/offer.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './content/about/about.component';
import { ContentService } from './content/content.service';
import { CoreService } from './core/core.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LandingComponent,
    LeftBarComponent,
    RightBarComponent,
    NavbarComponent,
    StartComponent,
    BlogComponent,
    OfferComponent,
    GalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [ContentService, CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
