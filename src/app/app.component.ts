import { Component } from '@angular/core';
import { ContentService } from './content/content.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private contentService: ContentService) {}
  title = 'app';
  ngOnInit() {
    this.contentService.imageActivated.next('https://source.unsplash.com/MwOxCJUsRNM');
  }
}
