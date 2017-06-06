import { Component, OnInit } from '@angular/core';
import { leaveAnimation } from "../animation/sktx.router-page.animations";
import { Router } from "@angular/router";

@Component({
  selector: 'app-page-d',
  templateUrl: './page-d.component.html',
  styleUrls: ['./page-d.component.css'],
  animations: [leaveAnimation],
  host: { '[@leaveAnimation]': '' }
})
export class PageDContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
