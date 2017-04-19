import { NgModule } from '@angular/core';
import { BoardComponent } from "./board.component";
import { PopupComponent } from "../../components/popup/popup.component";
import { BoarderRouterModule } from "./board.router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    BoarderRouterModule
  ],
  exports: [],
  declarations: [BoardComponent],
  providers: []
})
export class BoardModule {
}
