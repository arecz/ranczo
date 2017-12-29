import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnDestroy {

  constructor(private contentService: ContentService) { }

  ngOnDestroy() {
    this.contentService.imageActivated.next(this.contentService.images[1]['full']);
  }

}
