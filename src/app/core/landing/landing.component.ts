import { Component, OnInit, OnChanges } from '@angular/core';
import { ContentService } from '../../content/content.service';
import { OnDestroy, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {

  state = 'normal';
  image: string;
  isGalleryOn = false;
  defaultImg = './assets/img/fabian-burghardt-84752.jpg';

  imageChangeSubscription: Subscription;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.imageChangeSubscription = this.contentService.imageActivated.subscribe(
      (image: string) => {
          this.isGalleryOn = true;
          console.log(image);
          return this.image = image;
      }
    );
  }


  ngOnDestroy() {
    this.imageChangeSubscription.unsubscribe();
  }


}
