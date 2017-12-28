import { Subject } from 'rxjs/Subject';

export class ContentService {

    isGalleryOn = false;
    imageActivated = new Subject();
    image: string;
    images: Array<string> = [
        './assets/img/Zniwa-2014.jpg',
        './assets/img/fabian-burghardt-84752.jpg',
        './assets/img/filipe-dos-santos-mendes-195654.jpg',
        './assets/img/hans-veth-397711.jpg',
        './assets/img/joey-pilgrim-251356.jpg',
        './assets/img/kenny-webster-417544.jpg',
        './assets/img/nathan-anderson-291067.jpg',
        './assets/img/raphael-wicker-94290.jpg',
        './assets/img/Zniwa-2014.jpg',
    ];

}

