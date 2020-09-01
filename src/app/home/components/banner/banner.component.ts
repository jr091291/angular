import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/banner-images/banner-1.png',
    'assets/banner-images/banner-2.png',
    'assets/banner-images/banner-3.png',
    'assets/banner-images/banner-4.png',
    'assets/banner-images/banner-5.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
