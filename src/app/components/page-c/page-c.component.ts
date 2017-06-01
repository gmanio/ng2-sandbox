import { Component, OnInit, HostListener } from '@angular/core';
import { routerAnimation } from "../animation/sktx.router-page.animations";
import { Router } from "@angular/router";

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css'],
  animations: [routerAnimation],
  host: { '[@routerAnimation]': '' }
})

export class PageCComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  handleKeyboardEvent(kbdEvent: KeyboardEvent) {
    this.router.navigate(['d']);
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
