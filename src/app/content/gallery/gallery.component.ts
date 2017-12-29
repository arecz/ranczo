import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';
import { fadeInAnimation } from '../../_animations/fade-in.animation';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [fadeInShortAnimation, fadeInAnimation]
})
export class GalleryComponent implements OnInit, OnDestroy {

  images: Array<{}>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.images = this.contentService.images;
    console.log(this.images);
  }

  onImageClick(image: string) {
    this.contentService.imageActivated.next(image);
  }

  ngOnDestroy() {
    this.contentService.imageActivated.next(this.contentService.images[5]['full']);
  }

}
