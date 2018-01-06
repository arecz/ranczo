import { Subject } from 'rxjs/Subject';

export class ContentService {

    isGalleryOn = false;
    imageActivated = new Subject();
    image: string;
    images: Array<{}> = [
        {
            full: './assets/img/1-min.jpg',
            min: './assets/img/1.jpg'
        },
        {
            full: './assets/img/2-min.jpg',
            min: './assets/img/2.jpg'
        },
        {
            full: './assets/img/3-min.jpg',
            min: './assets/img/3.jpg'
        },
        {
            full: './assets/img/4-min.jpg',
            min: './assets/img/4.jpg'
        },
        {
            full: './assets/img/5-min.jpg',
            min: './assets/img/5.jpg'
        },
        {
            full: './assets/img/7-min.jpg',
            min: './assets/img/7.jpg'
        },
        {
            full: './assets/img/6-min.jpg',
            min: './assets/img/6.jpg'
        },
        {
            full: './assets/img/8-min.jpg',
            min: './assets/img/8.jpg'
        },
        {
            full: './assets/img/9-min.jpg',
            min: './assets/img/9.jpg'
        },
        {
            full: './assets/img/10-min.jpg',
            min: './assets/img/10.jpg'
        },
        {
            full: './assets/img/11-min.jpg',
            min: './assets/img/11.jpg'
        },
        {
            full: './assets/img/12-min.jpg',
            min: './assets/img/12.jpg'
        },
    ];

}

