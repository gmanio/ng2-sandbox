import {
  Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef,
  ChangeDetectorRef
} from "@angular/core";
import { routerAnimation } from "../animation/sktx.router-page.animations";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

declare let ImageCapture;

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css'],
  animations: [routerAnimation],
  host: { '[@routerAnimation]': '' }
})
export class PageAComponent implements OnInit, AfterViewInit {
  @ViewChild("gVideo") video: ElementRef;

  ngAfterViewInit(): void {
    let _video = this.video.nativeElement;
    if ( navigator.mediaDevices && navigator.mediaDevices.getUserMedia ) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          _video.src = window.URL.createObjectURL(stream);
          _video.play();
        })
    }
  }

  @HostListener('document:click', ['$event'])
  handleKeyboardEvent(kbdEvent: KeyboardEvent) {
    this.router.navigate(['b']);
  }

  constructor(private router: Router,
              private changeDetector: ChangeDetectorRef,) {

  }

  gotMedia(mediaStream) {
    let mediaStreamTrack = mediaStream.getVideoTracks()[0];
    let imageCapture = new ImageCapture(mediaStreamTrack);

    const canvas = document.querySelector('canvas');

    imageCapture.grabFrame()
      .then(imageBitmap => {
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
      })
      .catch(error => console.error('grabFrame() error:', error));
  }

  ngOnInit() {

  }
}
