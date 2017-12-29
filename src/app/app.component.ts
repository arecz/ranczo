import { Component } from '@angular/core';
import { ContentService } from './content/content.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { fadeInAnimation } from './_animations/fade-in.animation';
import { fadeInLongAnimation } from './_animations/fade-in-long.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation, fadeInLongAnimation]
})
export class AppComponent implements OnInit {
  constructor (private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.imageActivated.next('https://source.unsplash.com/MwOxCJUsRNM');
  }
}
