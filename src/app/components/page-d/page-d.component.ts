import { Component, OnInit, HostListener } from '@angular/core';
import { routerAnimation } from "../animation/sktx.router-page.animations";
import { Router } from "@angular/router";

@Component({
  selector: 'app-page-d',
  templateUrl: './page-d.component.html',
  styleUrls: ['./page-d.component.css']
})
export class PageDContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
