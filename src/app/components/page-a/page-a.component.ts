import { Component, OnInit, HostListener } from '@angular/core';
import { routerAnimation } from "../animation/sktx.router-page.animations";
import { Router } from "@angular/router";

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css'],
  animations: [routerAnimation],
  host: { '[@routerAnimation]': '' }
})
export class PageAComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  handleKeyboardEvent(kbdEvent: KeyboardEvent) {
    this.router.navigate(['b']);
  }

  constructor(private router: Router) {
  }

  ngOnInit() {

  }
}
