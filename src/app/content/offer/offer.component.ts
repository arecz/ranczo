import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';
import { fadeInExtraShortAnimation } from '../../_animations/fade-in-extra-short.animation';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  animations: [fadeInShortAnimation, fadeInExtraShortAnimation]
})
export class OfferComponent implements OnDestroy {

  isTouristOn = false;
  isBedOn = false;

  constructor(private contentService: ContentService) { }

  onTouristClick() {
    this.isTouristOn = !this.isTouristOn;
  }

  onBedClick() {
    this.isBedOn = !this.isBedOn;
  }

  ngOnDestroy() {
    this.contentService.imageActivated.next(this.contentService.images[1]['full']);
  }

}
