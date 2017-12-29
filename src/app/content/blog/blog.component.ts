import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnDestroy {

  constructor(private contentService: ContentService) { }

  ngOnDestroy() {
    this.contentService.imageActivated.next(this.contentService.images[4]['full']);
  }

}
