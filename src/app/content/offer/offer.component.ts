import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  animations: [fadeInShortAnimation]
})
export class OfferComponent implements OnDestroy {

  constructor(private contentService: ContentService) { }

  ngOnDestroy() {
    this.contentService.imageActivated.next(this.contentService.images[1]['full']);
  }

}
