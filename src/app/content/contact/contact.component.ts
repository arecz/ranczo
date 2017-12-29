import { Component, OnDestroy } from '@angular/core';
import { ContentService } from '../content.service';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInShortAnimation]
})
export class ContactComponent implements OnDestroy {

  constructor(private contentService: ContentService) { }
  
    ngOnDestroy() {
      this.contentService.imageActivated.next(this.contentService.images[3]['full']);
    }

}
