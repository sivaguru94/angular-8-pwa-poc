import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  mobile: Boolean = true;
  columnNum = 4;

  constructor(private router: Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 769) {
      this.columnNum = 1;
      this.mobile = false;
    } else {
      this.columnNum = 4;
      this.mobile = true;
    }
  }

  ngOnInit() {
    if (window.screen.width < 769) {
      this.mobile = false;
    }
  }

  onClickLogin() {
    this.router.navigate(['/login']);
  }
}
