import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Array<string>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.images = this.contentService.images;
    console.log(this.images);
  }

  onImageClick(image: string) {
    this.contentService.imageActivated.next(image);
  }

}
