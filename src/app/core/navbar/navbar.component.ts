import { Component, OnInit } from '@angular/core';
import { fadeInExtraShortAnimation } from '../../_animations/fade-in-extra-short.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [fadeInExtraShortAnimation]
})
export class NavbarComponent implements OnInit {

  isHamburgerOpen = false;

  constructor() { }

  ngOnInit() {
  }

  onHamburgerClick() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }


}
