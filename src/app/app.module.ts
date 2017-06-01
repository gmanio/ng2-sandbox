import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PopupService } from "./services/popup.service";
import { PopupComponent } from './components/popup/popup.component';
import { RootRouter } from "./app.route";
import { BoardModule } from "./modules/board/board.module";
import { SwiperComponent } from './components/swiper/swiper.component';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageCComponent } from './components/page-c/page-c.component';
import { PageDModule } from "./components/page-d/page-d.module";

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    SwiperComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RootRouter,
    BoardModule,
    PageDModule
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
