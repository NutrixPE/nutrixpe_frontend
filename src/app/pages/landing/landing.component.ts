import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {


  images = [
    { imageSrc: '../assets/images/dieta-min.jpg', imageAlt: 'img1' },
    { imageSrc: '../assets/images/Dieta-para-bajar-de-peso-en-un-mes.webp', imageAlt: 'img2' },
    { imageSrc: '../assets/images/SHNY74NMDBFIDICLOHTMD3AHAQ.jpg', imageAlt: 'img3' }
  ]
}
