import { Component, OnInit, HostListener } from '@angular/core';
import { routerAnimation } from "../animation/sktx.router-page.animations";
import { Router } from "@angular/router";

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css'],
  animations: [routerAnimation],
  host: { '[@routerAnimation]': '' }
})
export class PageBComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  handleKeyboardEvent(kbdEvent: KeyboardEvent) {
    this.router.navigate(['c']);
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
