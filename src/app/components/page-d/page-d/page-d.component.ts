import { Component, OnInit, HostListener } from '@angular/core';
import { routerAnimation } from "../../animation/sktx.router-page.animations";
import { Router } from "@angular/router";

@Component({
  selector: 'app-page-d',
  templateUrl: './page-d.component.html',
  styleUrls: ['./page-d.component.css'],
  animations: [routerAnimation],
  host: { '[@routerAnimation]': '' }
})
export class PageDComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  handleKeyboardEvent(kbdEvent: KeyboardEvent) {
    this.router.navigate(['a']);
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
