import { Component, OnDestroy } from '@angular/core';
import { ContentService } from '../content.service';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInShortAnimation]
})
export class AboutComponent implements OnDestroy {

  constructor(private contentService: ContentService) { }


  ngOnDestroy() {
    this.contentService.imageActivated.next(this.contentService.images[2]['full']);
  }
}
