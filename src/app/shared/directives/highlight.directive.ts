import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('click', ['$event']) onClick(event: Event) {
    let buttons: HTMLElement[];
    if ((<HTMLElement>event.target).nodeName === 'A') {
      const listItem = <HTMLElement>event.target;
      const navigation = <HTMLElement>listItem.parentNode;
      buttons = Array.prototype.slice.call(navigation.parentNode?.children);
    } else {
      const navigation = <HTMLElement>event.target;
      buttons = Array.prototype.slice.call(navigation.parentNode?.children);
    }

    buttons.forEach((button: HTMLElement) =>
      this._renderer2.removeClass(button, 'enabled')
    );

    this._renderer2.addClass(this._elementRef.nativeElement, 'enabled');
  }

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {}
}
