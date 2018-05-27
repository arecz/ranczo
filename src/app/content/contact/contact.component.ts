import { Component, OnDestroy } from '@angular/core';
import { ContentService } from '../content.service';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';
import { fadeInExtraShortAnimation } from '../../_animations/fade-in-extra-short.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInShortAnimation, fadeInExtraShortAnimation]
})
export class ContactComponent implements OnDestroy {

  offerSwitchValue: string;

  onMailClick() {
    this.offerSwitchValue = 'mail';
  }
  onPhoneClick() {
    this.offerSwitchValue = 'phone';
  }
  onAddressClick() {
    this.offerSwitchValue = 'address';
  }
  onFacebookClick() {
    this.offerSwitchValue = 'fb';
  }

  constructor(private contentService: ContentService) { }
  
    ngOnDestroy() {
      this.contentService.imageActivated.next(this.contentService.images[3]['full']);
    }

}
