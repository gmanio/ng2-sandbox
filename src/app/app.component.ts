import { Component, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { PopupService } from "./services/popup.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('popup', { read: ViewContainerRef })
  private popupContainerRef: ViewContainerRef;

  ngAfterViewInit(): void {
    this.popupService.viewRef = this.popupContainerRef;

    this.popupService.open();
  }

  constructor(private popupService: PopupService) {
  }


}
