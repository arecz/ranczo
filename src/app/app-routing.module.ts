import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { OfferComponent } from './offer/offer.component';
import { StartComponent } from './start/start.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent, children: [
        { path: '', component: StartComponent, pathMatch: 'full' },
        { path: 'gallery', component: GalleryComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'offer', component: OfferComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
    ] },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}) 



export class AppRoutingModule {

}
