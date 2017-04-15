import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopupComponent } from '../components/popup/popup.component';

@Injectable()
export class PopupService {
  private _viewRef: ViewContainerRef;

  set viewRef(value: ViewContainerRef) {
    this._viewRef = value;
  }

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
  }

  open() {
    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(PopupComponent);

    this._viewRef.createComponent(componentFactory);
  }
}
