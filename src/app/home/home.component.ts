import {Component, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('carousel', { static: true }) public el: any;

  @HostListener('swipeleft', ['$event']) public swipePrev(event: any) {
    this.el.previousSlide();
  }

  @HostListener('swipedown', ['$event']) public swipeDown(event: any) {
    this.el.nextSlide();
  }
  ngOnInit() {
  }

}
