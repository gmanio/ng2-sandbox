import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDComponent } from './page-d/page-d.component';
import { PageDContainerComponent } from "./page-d.component";
import { childRouter } from "./page.route";

@NgModule({
  imports: [
    CommonModule,
    childRouter
  ],
  declarations: [
    PageDContainerComponent,
    PageDComponent
  ]
})
export class PageDModule { }
