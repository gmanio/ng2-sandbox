import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var Swiper;

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit, AfterViewInit {
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var hswiper = new Swiper('.swiper-container.horizontal', {
      direction: 'horizontal',
      threshold: 80
    });

    var vswiper1 = new Swiper('.swiper-container.vswiper1', {
      scrollbar: '.swiper-scrollbar.vscroll1',
      direction: 'vertical',
      slidesPerView: 'auto',
      mousewheelControl: true,
      freeMode: true,
      mousewheelReleaseOnEdges: true,
      scrollbarDraggable: true,
      // onScroll: (swiper, e) => {
      //   console.log('scroll');
      //   console.log(e)
      // },
      onTouchMove: (swiper, e) => {
        setTimeout((oSwiper) => {
          console.log(swiper.getTranslate(swiper.wrapper[0], 'y'));
          swiper.setWrapperTransition(0);
          console.log(swiper.setWrapperTranslate(-100))
        }, 1000);
      },
      // onSetTranslate:(swiper, translate)=>{
      //   debugger;
      // }
    });
  }
}
