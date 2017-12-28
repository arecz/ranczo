import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../content/content.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  image: string;
  isGalleryOn = false;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.imageActivated.subscribe(
      (image: string) => {
          this.isGalleryOn = true;
          console.log(image);
          return this.image = image;
      }
    );
  }


}
