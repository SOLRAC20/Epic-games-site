import { Component, OnInit } from '@angular/core';

declare var bootstrap: any; // Importa a biblioteca Bootstrap globalmente

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {
    const multipleCardCarousel = document.querySelector("#carouselExampleControls");

    if (multipleCardCarousel instanceof HTMLElement) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        const carousel = new bootstrap.Carousel(multipleCardCarousel, {
          interval: false, // Disable automatic sliding
          wrap: false, // Prevent wrapping at the end
        });

        const carouselInner = document.querySelector(".carousel-inner") as HTMLElement;
        const carouselNextButton = document.querySelector("#carouselExampleControls .carousel-control-next") as HTMLElement;
        const carouselPrevButton = document.querySelector("#carouselExampleControls .carousel-control-prev") as HTMLElement;

        if (carouselInner && carouselNextButton && carouselPrevButton) {
          const carouselWidth = carouselInner.scrollWidth;
          const cardWidth = document.querySelector(".carousel-item")?.clientWidth || 0;
          let scrollPosition = 0;

          carouselNextButton.addEventListener("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
              scrollPosition += cardWidth;
              carouselInner.scroll({ left: scrollPosition, behavior: 'smooth' });
            }
          });

          carouselPrevButton.addEventListener("click", function () {
            if (scrollPosition > 0) {
              scrollPosition -= cardWidth;
              carouselInner.scroll({ left: scrollPosition, behavior: 'smooth' });
            }
          });
        }
      } else {
        multipleCardCarousel.classList.add("slide");
      }
    }
  }
}
