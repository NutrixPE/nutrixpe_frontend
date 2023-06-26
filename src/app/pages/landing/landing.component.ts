import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {


  images = [
    { imageSrc: '../assets/images/NutrixPE-logo.png', imageAlt: 'img1' },
    { imageSrc: '../assets/images/NutrixPE-logo.png', imageAlt: 'img2' }
  ]
}
