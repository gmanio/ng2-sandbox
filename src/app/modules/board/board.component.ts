import { Component, OnInit, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { PopupService } from "../../services/popup.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterViewInit {
  @ViewChild('popup', { read: ViewContainerRef })
  private popupContainerRef: ViewContainerRef;

  constructor(private popupService:PopupService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.popupService.viewRef = this.popupContainerRef;

    this.popupService.open();
  }
}
