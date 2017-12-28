import { Injectable } from '@angular/core';
import { ContentService } from '../content/content.service';
@Injectable()

export class CoreService {
    constructor (private contentService: ContentService) {}
}
