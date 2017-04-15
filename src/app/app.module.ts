import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PopupService } from "./services/popup.service";
import { PopupComponent } from './components/popup/popup.component';
import { RootRouter } from "./app.route";
import { BoardModule } from "./modules/board/board.module";

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RootRouter,
    BoardModule
  ],
  providers: [
    PopupService
  ],
  entryComponents: [
    PopupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
