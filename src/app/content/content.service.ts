import { Subject } from 'rxjs/Subject';

export class ContentService {

    isGalleryOn = false;
    imageActivated = new Subject();
    image: string;
    images: Array<{}> = [
        {
            full: './assets/img/Zniwa-2014-min.jpg',
            min: './assets/img/Zniwa-2014-min.jpg'
        },
        {
            full: './assets/img/fabian-burghardt-84752-min.jpg',
            min: './assets/img/Zniwa-2014-min.jpg'
        },
        {
            full: './assets/img/filipe-dos-santos-mendes-195654-min.jpg',
            min: './assets/img/Zniwa-2014-min.jpg'
        },
        {
            full: './assets/img/hans-veth-397711-min.jpg',
            min: './assets/img/Zniwa-2014-min.jpg'
        },
        {
            full: './assets/img/joey-pilgrim-251356-min.jpg',
            min: './assets/img/Zniwa-2014-min.jpg'
        },
        {
            full: './assets/img/kenny-webster-417544-min.jpg',
            min: './assets/img/Zniwa-2014-min.jpg'
        }
    ];

}

