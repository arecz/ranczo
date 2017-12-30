import { Component, OnInit, OnChanges } from '@angular/core';
import { ContentService } from '../../content/content.service';
import { OnDestroy, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate, keyframes, stagger } from '@angular/animations';
import { fadeInAnimation } from '../../_animations/fade-in.animation';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [fadeInAnimation,
    trigger('imageState', [
      state('normal', style({
        
      })),
      state('change', style({
        
      })),
      transition('normal <=> change', animate('1.3s ease-out', keyframes([
        style({
          transform: 'translateX(100%)',
          'opacity': '0'
        }),
        style({
          'opacity': '1'
        }),
        style({
          transform: 'translateX(0px)'
        })
      ])))
    ])
  ]
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
          this.state === 'normal' ? this.state = 'change' : this.state = 'normal';
          console.log(this.state);
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
