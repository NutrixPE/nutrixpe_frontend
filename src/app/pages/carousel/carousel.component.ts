import { Component, Input } from '@angular/core';

interface carouselImage {
  imageSrc: string,
  imageAlt: string
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0;

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

}
